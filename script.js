const container = document.querySelector('.container');
const restartBtn = document.querySelector('.restart-btn');
const win = document.getElementById("disp");

const squares = [];
const totalsq = 64;
let count = 0;

function createGrid()
{
    win.innerHTML = "";
    container.innerHTML = '';
    
    for (let i = 0; i < 64; i++)
    {
        const square = document.createElement('div');
        square.classList.add('square');
        squares.push(square);

        square.addEventListener('mouseover', (e) => {
            if(!square.classList.contains('hovered'))
                {
                    square.classList.add('hovered');
                    count++;

                    if(count === totalsq)
                        {
                            win.innerHTML = "Congratulations! You win!";
                        }
                }
        });
        container.appendChild(square);
    }
}

createGrid();

restartBtn.addEventListener('click', (e) => {
    count = 0;
    createGrid();
});