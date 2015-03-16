/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"12D3B685-FA8E-4F9E-B622-1AE1BD416A63"}
 */
function onSolutionOpen() 
{
//	if (application.getApplicationType() != 5){
//        plugins.window.getMenuBar().setVisible(false)
//        plugins.window.setStatusBarVisible(false)
//		plugins.window.setToolBarAreaVisible(false)
//	}

	scopes.globals.InicializaParametros()
	
//	forms.InicioSolucion.controller.show()
}

/**
 * @properties={typeid:24,uuid:"4CEE11D9-4E0B-45A4-9845-EC2354D9685D"}
 */
function InicializaArgento()
{
	if (application.getApplicationType() == 5)
	{
		application.output('Argento: InicializaArgentoInWebCliet',LOGGINGLEVEL.INFO)
		forms.InicioLitoral.controller.show()
	}
	forms.InicioLitoral.controller.show()
}
