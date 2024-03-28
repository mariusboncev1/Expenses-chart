const ctx = document.querySelector('#myChart');

  new Chart(ctx, {
    type: 'bar',

    data: {
      labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', "sun"],
      datasets: [{
        labels: '$',
        data: [17.9, 34, 52.6, 31.07, 18, 36, 23],
        borderWidth: 0,
        backgroundColor: '#E7755D',
      }]
    },

    options: {
      elements: {
        bar: {
          hoverBackgroundColor: '#76B5BC',
          borderRadius: '7'
        }
      },

      plugins: {
        legend: {
          display: false
        }
      },

      scales: {
        
        y: {
          grid: {
            display:false
          },
          beginAtZero: true,
          title: {
            display: false
          },
          ticks: {
            display:false
          }
        },
        x: {
          grid: {
            display: false
          },
        }
      }
      
    }
  });