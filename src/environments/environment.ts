// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  server_url: 'http://0.0.0.0:8080/',
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
