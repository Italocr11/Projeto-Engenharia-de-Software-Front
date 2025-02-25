export const solicitar = (
  e,
  data,
  selectedHorario,
  bola,
  rede,
  coletes,
  baseValor,
  router,
  setMsg
) => {
  e.preventDefault();

  if (!data) {
    setMsg("Selecione uma data!");
    return;
  }

  if (!selectedHorario) {
    setMsg("Selecione um horário!");
    return;
  }

  const valorFinal =
    baseValor + (bola ? 5 : 0) + (rede ? 5 : 0) + (coletes ? 5 : 0);

  router.push(
    `/solicitarReserva?valor=${valorFinal}&horario=${selectedHorario}&data=${data}&bola=${bola}&rede=${rede}&coletes=${coletes}`
  );
};
