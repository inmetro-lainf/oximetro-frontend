import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NetworkService } from './../network.service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-measurements-card',
  templateUrl: './measurements-card.component.html',
  styleUrls: ['./measurements-card.component.css']
})
export class MeasurementsCardComponent implements OnInit {
  public titulo: string;
  public pathDaImagem: string;
  public descricao: string;
  public ultimaLeitura = 0;
  public initialChartData: Array<Array<any>> = [
    [ 0, 0 ]
  ];
  public chartConfig = {
    title: 'Area Chart',
    type: 'AreaChart',
    columnNames: ['Data', '<Medida>'],
    data: this.initialChartData,
    options: {
      chartArea: {
        width: '80%',
        height: '80%'
      },
      backgroundColor: '#efefef',
      colors: ['#82b1ff'],
      pointSize: 6,
      fontName: 'Roboto',
      fontSize: 14,
      hAxis: {
        textPosition: 'none',
        textStyle: {
          color: 'black',
        },
        baselineColor: 'black'
      },
      vAxis: {
        minValue: 0,
        maxValue: 100,
        textStyle: {
          color: 'black',
        },
        baselineColor: 'black'
      },
      animation: {
        startup: true,
        duration: 1000
      },
      legend: {
        position: 'none',
        textStyle: {
          color: 'black',
        }
      },
      tooltip: {
        ignoreBounds: false,
        isHtml: false
      }
    }
  };

  @Input() measurement: string;

  private response: Observable<object>;

  constructor(
    private networkService: NetworkService) {
      setInterval(() => this.fetchData(), 1000 * 60 * environment.update_interval);
     }

  ngOnInit(): void {
      const options = environment.graph_options[this.measurement];
      this.titulo = options.title;
      this.pathDaImagem = options.header_img;
      this.descricao = options.description;
      this.chartConfig.columnNames = ['Data', this.titulo];
      this.fetchData();
  }

  fetchData() {
    // Busca dados de medição no banco de dados.
    const route = 'busca_dados_para_grafico/' + this.measurement;
    this.response = this.networkService.buscarDadosNoServidor(route);
    this.response.subscribe((data: {graph_data: []}) => {
      this.updateGraphData(data);
    });
  }

  updateGraphData(data: {graph_data: []}) {
    if ( data.graph_data.length === 0 ) {
      this.chartConfig.data = this.initialChartData;
    } else {
      this.chartConfig.data = data.graph_data;
    }
  }

}
