const barChart = document.getElementById('barChart').getContext('2d'),
      lineChart = document.getElementById('lineChart').getContext('2d'),
      labelsInp = document.querySelector('.labels'),
      dataInp = document.querySelector('.data'),
      typeChart = document.querySelector('.typeChart'),
      container = document.querySelector('.container');

  let lables = ['January','February','March','April','May','June','Juli'];
  let data = [6, 10, 5, 8, 20, 30,4];
  labelsInp.value = lables.join(",");
  dataInp.value  = data.join(",");

  
  ////BAR CONFIG////
  const configBar = {
    type: 'bar',
    data: {
        labels: lables,
        datasets: [{
          label: 'Dataset',
          data: data ,
          backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
          borderColor:[
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
          borderWidth: 1,
        }]
      },
      options: {},
  };

  let myChartBar = new Chart(barChart,configBar);
 



  ///LINE CONFIG///
  const configLine = {
    type: 'line',
    data: {
        labels: lables,
        datasets: [{
          label: 'Dataset',
          data: data ,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor:'rgba(255, 99, 132, 1)',
        }]
      },
      options: {},
  };
  let myChartLine = new Chart(lineChart,configLine);
  
  


  /// INPUTS EVENTS ///
  labelsInp.addEventListener("change", () => {
    let newLabels = labelsInp.value.split(",");
    configLine.data.labels = newLabels;
    configBar.data.labels = newLabels;
    myChartBar.update();
    myChartLine.update();
  });

  dataInp.addEventListener("change", () => {
    let newData = dataInp.value.split(",");
    configLine.data.datasets[0].data = newData;
    configBar.data.datasets[0].data = newData;
    myChartBar.update();
    myChartLine.update();
  });



  /// CHANGE CHART Line/Bar ///
  const barChartCanv = document.querySelector('#barChart');
  const lineChartCanv = document.querySelector('#lineChart');

  lineChartCanv.style.display ="none";


  typeChart.addEventListener('change', () => {
    if(typeChart.value === 'line') {
      barChartCanv.style.display ="none";
      lineChartCanv.style.display ="block";
    } else {
      barChartCanv.style.display ="block";
      lineChartCanv.style.display ="none";
    }
    myChartBar.update();
    myChartLine.update();
    
  });



