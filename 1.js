const modal1 = document.querySelector('#modal1');
const modal2 = document.querySelector('#modal2');
const modal3 = document.querySelector('#modal3');

const btn = document.querySelector('#openModal');

modal1.style.display = 'flex';
modal2.style.display = 'flex';
modal3.style.width = '300px';
modal3.style.height = '850px';
modal3.style.display = 'flex';
btn.style.margin = '0 0 0 0';

btn.onclick = function()
    {
    if  (   modal1.style.display === 'none')
        {
            modal1.style.display = 'flex';
            modal2.style.display = 'flex';
            modal3.style.width = '300px';
            modal3.style.height = '850px';
            modal3.style.display = 'flex';
            btn.style.margin = '0 0 0 0';
        }
    else{
            modal1.style.display = 'none';
            modal2.style.display = 'none';
            modal3.style.width = '100px';
            modal3.style.height = '850px';
            modal3.style.display = 'flex';
            btn.style.margin = '0 0 0 -400px';
        };
    }

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};