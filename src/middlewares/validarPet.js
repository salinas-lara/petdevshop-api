function validarPet(req, res, next) {
  const { nome, especie, tutorId } = req.body;

  if (!nome || typeof nome !== 'string' || nome.trim().length < 2) {
    return res.status(400).json({
      erro: "O nome é obrigatório e deve ter no mínimo 2 caracteres."
    });
  }

  if (!especie || typeof especie !== 'string' || especie.trim() === "") {
    return res.status(400).json({
      erro: "A espécie não pode ficar em branco."
    });
  }

  if (req.method === 'POST') {
    const idNumerico = Number(tutorId);
    if (!tutorId || isNaN(idNumerico) || idNumerico <= 0) {
      return res.status(400).json({
        erro: "O 'tutorId' é obrigatório e deve ser um número válido."
      });
    }
    req.body.tutorId = idNumerico;
  }

  req.body.nome = nome.trim();
  req.body.especie = especie.trim();

  next();
}

module.exports = validarPet;