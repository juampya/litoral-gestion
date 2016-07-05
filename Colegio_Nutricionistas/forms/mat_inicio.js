/**
 * @properties={typeid:35,uuid:"ABCD7BF8-93C3-46F1-AC48-D14B87939A28",variableType:-4}
 */
var fs_submenu = null;

/**
 * @properties={typeid:24,uuid:"3D1B4A55-EC4D-460D-A83A-D32878D16A83"}
 */
function Salir()
{
	if(application.isInDeveloper())
	{
		if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
		{
			databaseManager.revertEditedRecords()
			var solucion = application.getSolutionName()
			security.logout(solucion)
		}
		else
		{
			application.exit()
		}
		
	}
	else
	{
		application.exit()
	}
}

/**
 * @properties={typeid:24,uuid:"043AA580-DA71-420E-8D4C-18ACCF009085"}
 */
function generarCuota()
{
	scopes.globals.SacarMenu()
	forms.mat_liquidacion.controller.show()
}

/**
 * @properties={typeid:24,uuid:"5012ACCF-B4B3-4ABE-8AA1-784BAC28359D"}
 */
function parametros()
{
	scopes.globals.SacarMenu()
	forms.mat_parametros.controller.show()
}

/**
 * @properties={typeid:24,uuid:"28C2BD21-4004-4B82-A4D4-421AD6FC12C6"}
 */
function conceptos()
{
	scopes.globals.SacarMenu()
	forms.mat_ingresos_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"6AA80D2D-D1CA-4BCF-8611-4D6F487D32A9"}
 */
function resarcimientos() 
{
	scopes.globals.SacarMenu()
	forms.mat_resarcimientos_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"CEC2983A-4A27-48BD-B181-CE7068FE0C0F"}
 */
function saldosGlobales()
{
	scopes.globals.SacarMenu()
	forms.mat_saldos_globales.controller.show()
}

/**
 * @properties={typeid:24,uuid:"868DA1EB-679C-4D5E-B102-0BE61EECA5D9"}
 */
function matriculados()
{
	scopes.globals.SacarMenu()
	forms.sm_frm_matriculados_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_matriculados_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"07189E7A-B42A-43CC-A5B9-D3B3A3933583"}
 */
function universidades()
{
	scopes.globals.SacarMenu()
	forms.sm_frm_universidades.vl_frm_anterior = controller.getName()
	forms.sm_frm_universidades.controller.show()
}

/**
 * @properties={typeid:24,uuid:"34461ED5-A320-45B4-98CF-A59255F87071"}
 */
function titulos()
{
	scopes.globals.SacarMenu()
	forms.sm_frm_titulos.vl_frm_anterior = controller.getName()
	forms.sm_frm_titulos.controller.show()
}

/**
 * @properties={typeid:24,uuid:"DF52DFE9-102D-488A-907B-0CAA8183DBB9"}
 */
function localidades()
{
	scopes.globals.SacarMenu()
	forms.sm_frm_localidades.vl_frm_anterior = controller.getName()
	forms.sm_frm_localidades.controller.show()
}

/**
 * @properties={typeid:24,uuid:"46AC2DD9-3A40-41FC-9C02-AF21E56BF89F"}
 */
function movimientos()
{
	scopes.globals.SacarMenu()
	forms.mat_movimientos.controller.show()
}

/**
 * @properties={typeid:24,uuid:"13A91CBB-F8DF-4443-AE0A-D849FD58AB0F"}
 */
function departamentos()
{
	scopes.globals.SacarMenu()
	forms.sm_frm_departamentos.vl_frm_anterior = controller.getName()
	forms.sm_frm_departamentos.controller.show()
}

/**
 * @properties={typeid:24,uuid:"5B8E9A1C-8331-4C23-8A92-AA5F514066FE"}
 */
function solicitudes()
{
	scopes.globals.SacarMenu()
	forms.sm_frm_solicitudes.vl_frm_anterior = controller.getName()
	forms.sm_frm_solicitudes.controller.show()
}

/**
 * @properties={typeid:24,uuid:"F48CBA90-7374-4247-9E63-C96160B85AA2"}
 */
function consulta_solicitudes()
{
	scopes.globals.SacarMenu()
	forms.sm_frm_consulta_solicitudes.vl_frm_anterior = controller.getName()
	forms.sm_frm_consulta_solicitudes.controller.show()
}

/**
 * @properties={typeid:24,uuid:"ABFEC85E-C6B8-413C-A907-0C59A5505139"}
 */
function medios_de_cobro()
{
	scopes.globals.SacarMenu()
	forms.sm_frm_medios_cobro.vl_frm_anterior = controller.getName()
	forms.sm_frm_medios_cobro.controller.show()
}

/**
 * @properties={typeid:24,uuid:"46AF09EB-6214-49E9-8885-64E2CBEFA738"}
 */
function rendiciones()
{
	scopes.globals.SacarMenu()
	forms.mat_rendiciones.vl_frm_anterior = controller.getName()
	forms.mat_rendiciones.controller.show()
}

/**
 * @properties={typeid:24,uuid:"EBA901FC-5714-40B4-8228-D43D529F9657"}
 */
function obrasocial()
{
	scopes.globals.SacarMenu()
	forms.sm_frm_obras_sociales.vl_frm_anterior = controller.getName()
	forms.sm_frm_obras_sociales.controller.show()
}



/**
 * @properties={typeid:24,uuid:"DBDD4A34-C5D7-4EA0-B8D1-D64663C9AC21"}
 */
function test()
{
	forms.mat_form_aux_test.carga1000Matriculados()
}

/**
 * @properties={typeid:24,uuid:"EB833268-18F4-482A-8F9B-29317A9EC9A9"}
 */
function caja()
{
	scopes.globals.SacarMenu()
	forms.sm_frm_caja.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CC1C8823-6119-4285-9D42-0E9550267291"}
 * @AllowToRunInFind
 */
function onActionMenu(event) 
{	
//	if (vl_btn_n1_anterior != null) {
//		elements[vl_btn_n1_anterior].bgcolor = '#0080ff'
//	}
//	elements[event.getElementName()].bgcolor = '#ff8000'
//	vl_btn_n1_anterior = event.getElementName()
//	
//	elements[event.getElementName()].bgcolor = '#80ff80'
		
	elements.btn_menu1.getLocationX()
	/**@type {Number} */
	var vl_btn = event.getElementName().substr(8,1)
	scopes.globals.CargarSubMenuWeb(vl_btn,elements[event.getElementName()].getLocationX(),elements[event.getElementName()].getLocationY()+20) 
	
	///**@type {JSFoundSet<db:/Sistemas/menus>} */ 
	//scopes.globals.vg_fs_submenu = scopes.globals.CargarSubMenuWeb(vl_btn) 
}

/**
 * @properties={typeid:24,uuid:"78942D61-A2EF-4647-B4C4-20B50EE9518B"}
 */
function Consultorios()
{
	scopes.globals.SacarMenu()
	forms.sm_frm_consultorios.vl_frm_anterior = controller.getName()
	forms.sm_frm_consultorios.controller.show()
}

/**
 * @properties={typeid:24,uuid:"40206091-6E16-4E38-8F95-660D55452E56"}
 */
function PadronOS()
{
	scopes.globals.SacarMenu()
	forms.sm_frm_consulta_padron_os.vl_frm_anterior = controller.getName()
	forms.sm_frm_consulta_padron_os.controller.show()
}

/**
 * @properties={typeid:24,uuid:"A91CA235-8A6E-4140-B842-6D6E595E361F"}
 */
function GeneraArchivoDeuda()
{
	scopes.globals.SacarMenu()
	forms.mat_genera_archivos_deudas.vl_frm_anterior = controller.getName()
	forms.mat_genera_archivos_deudas.controller.show()
}

/**
 * @properties={typeid:24,uuid:"88A909E1-76B1-4AB7-BEBA-CD0CF09D6E11"}
 */
function ReporteIngresos()
{
	scopes.globals.SacarMenu()
	//forms.mat_reporte_ingresos.vl_frm_anterior = controller.getName()
	//forms.mat_reporte_ingresos.controller.show()
}

/**
 * @properties={typeid:24,uuid:"B02CBDE8-1F42-43D3-962B-665D54D0F0D0"}
 */
function ReporteConsultorios()
{
	scopes.globals.SacarMenu()
	//forms.mat_reporte_consultorios.vl_frm_anterior = controller.getName()
	//forms.mat_reporte_consultorios.controller.show()
}

/**
 * @properties={typeid:24,uuid:"600BE497-F36C-4A95-A521-E2C97248F95D"}
 */
function ReporteMatriculas()
{
	scopes.globals.SacarMenu()
	//forms.mat_reporte_matriculas.vl_frm_anterior = controller.getName()
	//forms.mat_reporte_matriculas.controller.show()
}

/**
 * @properties={typeid:24,uuid:"94DD2414-C451-4CAE-A268-D218135B75BF"}
 */
function ConsultaCuotasAdeudadas()
{
	scopes.globals.SacarMenu()
	forms.mat_consultas_cuotas_adeudadas.vl_frm_anterior = controller.getName()
	forms.mat_consultas_cuotas_adeudadas.controller.show()
}

/**
 * @properties={typeid:24,uuid:"4CA6891F-392D-4F85-AF75-AFA247FDF064"}
 */
function ConsultaSeguroMalaPraxis()
{
	scopes.globals.SacarMenu()
	forms.mat_consultas_smp.vl_frm_anterior = controller.getName()
	forms.mat_consultas_smp.controller.show()
}

/**
 * @properties={typeid:24,uuid:"B8037AFC-E445-45CE-A546-3AB96ABCE3B5"}
 */
function Mapa()
{
	var win = application.createWindow("mapa", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win.resizable = false
	win.title= 'Litoral Gestion';
	win.show(forms.mat_mapa);	
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B9925DFD-BFDB-45F4-96FE-6C1E8F58D51C"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	/** @type {JSFoundSet<db:/sistemas/mat_matriculados>} */
	var fs_matriculados = databaseManager.getFoundSet('sistemas','mat_matriculados')	
	
	/** @type {JSFoundSet<db:/sistemas/mat_matriculado_rel_ingresos>} */
	var fs_smp = databaseManager.getFoundSet('sistemas','mat_matriculado_rel_ingresos')	
			
	for (var i = 1; i <= databaseManager.getFoundSetCount(fs_matriculados); i++) 
	{
		/**@type {JSRecord}*/
		var record = fs_matriculados.getRecord(i)
		
		fs_smp.find()
		fs_smp.ingr_id = 2
		fs_smp.rel_estado = 1
		fs_smp.mat_id = record.mat_id
		if(fs_smp.search()>0)
		{
			record.calc_smp = 1
			record.calc_smp_inicio = fs_smp.rel_fec_inicial
			databaseManager.saveData(record)
		}
	}
}

/**
 * @properties={typeid:24,uuid:"0CCFA49F-C455-4415-800B-1AFCA85EA23E"}
 */
function FacturacionMensualMat()
{
	scopes.globals.SacarMenu()
	forms.mat_fact_mensual_mat.vl_frm_anterior = controller.getName()
	forms.mat_fact_mensual_mat.controller.show()
}

/**
 * @properties={typeid:24,uuid:"21ABFC3F-5488-47C6-BCDA-E89FAA81C25E"}
 */
function Autores()
{
	scopes.globals.SacarMenu()
	forms.biblio_frm_autores.vl_frm_anterior = controller.getName()
	forms.biblio_frm_autores.controller.show()
}

/**
 * @properties={typeid:24,uuid:"AE726F72-53D2-4EF4-A7AA-4E97D998E7CA"}
 */
function Editoriales()
{
	scopes.globals.SacarMenu()
	forms.biblio_frm_editoriales.vl_frm_anterior = controller.getName()
	forms.biblio_frm_editoriales.controller.show()
}

/**
 * @properties={typeid:24,uuid:"77E98712-F705-495C-99D3-325725714A3B"}
 */
function Libros()
{
	scopes.globals.SacarMenu()
	forms.biblio_frm_libros.vl_frm_anterior = controller.getName()
	forms.biblio_frm_libros.controller.show()
}