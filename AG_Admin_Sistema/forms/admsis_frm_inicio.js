 /**
 * @properties={typeid:24,uuid:"EFD550CE-D015-4958-A159-C62E958EE917"}
 */
function Salir()
 {
 	if(application.isInDeveloper())
 	{
 		application.exit()
 	}
 	else
 	{
 		application.closeSolution('Argento','InicializaArgento')
 	}
 }