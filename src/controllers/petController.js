// src/controllers/petController.js
const prisma = require('../prisma');

// 1. CREATE - Cadastrar Pet
async function criarPet(req, res) {
  try {
    const { nome, especie, tutorId } = req.body;

    const novoPet = await prisma.pet.create({
      data: {
        nome: nome,
        especie: especie,
        tutorId: Number(tutorId) // Converte a chave estrangeira para número
      }
    });

    return res.status(201).json(novoPet);

  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao criar pet. Verifique se o tutorId existe." });
  }
}

// 2. READ - Listar todos com o tutor embutido
async function listarPets(req, res) {
  try {
    const pets = await prisma.pet.findMany({
      include: {
        tutor: true // Traz os dados do Tutor no mesmo JSON
      }
    });

    return res.status(200).json(pets);

  } catch (erro) {
        console.log(erro);   // ADICIONE ESTA LINHA

    return res.status(500).json({ erro: "Erro ao listar pets." });
  }
}

// 3. READ - Buscar um pet pelo ID
async function buscarPetPorId(req, res) {
  try {
    const { id } = req.params;

    const pet = await prisma.pet.findUnique({
      where: { id: Number(id) },
      include: { tutor: true }
    });

    if (!pet) {
      return res.status(404).json({ erro: "Pet não encontrado." });
    }

    return res.status(200).json(pet);

  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao buscar o pet." });
  }
}

// 4. UPDATE - Atualizar dados do pet
async function atualizarPet(req, res) {
  try {
    const { id } = req.params;
    const { nome, especie } = req.body;

    const petAtualizado = await prisma.pet.update({
      where: { id: Number(id) },
      data: {
        nome: nome,
        especie: especie
      }
    });

    return res.status(200).json(petAtualizado);

  } catch (erro) {
    return res.status(404).json({ erro: "Registro não encontrado para atualização." });
  }
}

// 5. DELETE - Remover pet
async function apagarPet(req, res) {
  try {
    const { id } = req.params;

    await prisma.pet.delete({
      where: { id: Number(id) }
    });

    return res.status(204).send(); // 204: sucesso sem corpo de resposta

  } catch (erro) {
    return res.status(404).json({ erro: "Registro não encontrado para exclusão." });
  }
}

module.exports = {
  criarPet,
  listarPets,
  buscarPetPorId,
  atualizarPet,
  apagarPet
};