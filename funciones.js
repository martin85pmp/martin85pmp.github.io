
document.getElementById('mail').addEventListener('click', function(){
    document.getElementById('mailhere').style.display = 'block';
    document.getElementById('mail').style.display = 'none';
    document.getElementById('telefono').style.display = 'none';
    document.getElementById('whatsapp').style.display = 'none';
    document.getElementById('logotel').style.display = 'none';
    document.getElementById('logowsp').style.display = 'none';
    
} );

document.getElementById('telefono').addEventListener('click', function(){
    document.getElementById('telefonohere').style.display = 'block';
    document.getElementById('mail').style.display = 'none';
    document.getElementById('telefono').style.display = 'none';
    document.getElementById('whatsapp').style.display = 'none';
    document.getElementById('logomail').style.display = 'none';
    document.getElementById('logowsp').style.display = 'none';
    
} );

document.getElementById('whatsapp').addEventListener('click', function(){
    document.getElementById('whatsapphere').style.display = 'block';
    document.getElementById('mail').style.display = 'none';
    document.getElementById('telefono').style.display = 'none';
    document.getElementById('whatsapp').style.display = 'none';
    document.getElementById('logotel').style.display = 'none';
    document.getElementById('logomail').style.display = 'none';
    
} );