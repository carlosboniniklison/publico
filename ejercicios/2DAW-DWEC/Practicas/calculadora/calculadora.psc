Algoritmo Calculadora
	Leer tecla
	Repetir
		Si tecla es nro? Entonces
			ultimatecla = "numero"
			Si muestra="" Entonces
				muestra = nro
				Escribir muestra
			SiNo
				Segun operacion Hacer
					"+":
						muestra = muestra + tecla
					"-":
						muestra = muestra - tecla
					"*":
						muestra = muestra * tecla
					"/":
						Si tecla=0 Entonces
							muestra = "infinito"
						SiNo
							muestra = muestra / 0
						FinSi
				FinSegun
			FinSi
		SiNo
			ultimatecla = "operacion"
			operacion = tecla
		FinSi
		// LECTURA CON VALIDACION
		// SE ALTERNAN NUMEROS Y OPERADORES
		valido = "no"
		Repetir
			Leer tecla
			Si tecla es nro? Entonces
				Si ultimatecla = nro Entonces
				
				SiNo
					valido = "ok"
				FinSi
			SiNo
				Si ultimatecla es nro Entonces
					valido = "ok"
				FinSi
			FinSi
		Hasta Que valido="ok"
	Hasta Que cierre ventana
FinAlgoritmo
