const ctx = document.querySelector('#myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', "sun"],
      datasets: [{
        label: '$',
        data: [12, 190, 3, 5, 2, 3],
        borderWidth: 0,
        backgroundColor: '#E7755D',
        // mouseover: '#B4DFE5',
        // borderRadius: '50px'
        
      }]
    },
    options: {
        
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });