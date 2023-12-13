const typed=new Typed('.typed', {
    strings:['<i class="inicio">En un rincón del mundo, dos almas caminaban por sendas separadas, sin saber que el destino conspiraba para entrelazar sus vidas. <br><br>Ella, una soñadora empedernida, buscaba la magia en cada rincón de la vida. <br><br>Él, un espíritu aventurero, anhelaba descubrir los misterios que el mundo tenía para ofrecer.</i><br><br><i class="inicio">Un día, en un casa acogedora, nuestras miradas se cruzaron por primera vez. <br><br>Sin palabras, sintieron una conexión que resonó en el silencio. <br><br>El destino, maestro de las casualidades, guió sus pasos hacia un encuentro casual que dejó huella en sus corazones.</i><br><br><i class="inicio">A medida que el tiempo avanzaba, descubrieron que compartían risas, sueños y la creencia de que algo más grande los unía. <br><br>Los senderos de sus vidas se entrelazaron con hilos invisibles, y el destino tejía pacientemente una historia de amor.	</i><br><br><br> Continuará.....................',],
    typeSpeed: 76, // Velocidad en mlisegundos para poner una letra,
	startDelay: 100, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 50, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: false, // Repetir el array de strings
	loopCount: 1, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '♥', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
	
});