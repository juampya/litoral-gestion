/**
 * @properties={typeid:24,uuid:"3D1B4A55-EC4D-460D-A83A-D32878D16A83"}
 */
function Salir()
{
	if(application.isInDeveloper())
	{
		application.exit()
	}
	else
	{
		application.closeSolution('LitoralGestion','InicializaArgento')
	}
}