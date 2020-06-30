export const environment = {
  production: true,
  server_url: 'http://139.82.74.36/',
  update_interval: 5, // Tempo de atualização em minutos

  graph_options: {
    sp02: {
      title: 'Saturação de Oxigênio',
      header_img: '../../assets/sp02.png',
      description: 'Icone de Saturação de Oxigênio'
    },
    hearthate: {
      title: 'Frequência Cardíaca',
      header_img: '../../assets/hearthate.png',
      description: 'Icone de Frequência Cardíaca'
    }
  }
};
