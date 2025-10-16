function addPara()
{
const para=document.createElement('p');
para.textContent="hello from javascript";
// para.style.background="yellow";
para.style.color='green';
const id=document.querySelector('div')
document.getElementById('para1').appendChild(para);
}