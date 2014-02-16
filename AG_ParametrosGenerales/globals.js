/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"67352030-9DC7-4372-A91A-08F0E378ECD4",variableType:4}
 */
var vg_sp_tipo_movimiento = null;

/**
 * @properties={typeid:35,uuid:"BE57D497-7C39-44E2-8311-94219E709461",variableType:-4}
 */
var vg_archivo_imagen = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FEA39F35-EEF2-441A-809C-30E630F28332",variableType:4}
 */
var vg_archivo_funcion_codigo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5AC9AE6F-F1FA-4D2C-B85B-107620C5ED0D",variableType:4}
 */
var vg_archivo_tabla_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"221853E5-F884-441B-9078-0C9C88C65199",variableType:4}
 */
var vg_archivo_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9BDE2BD1-F747-4F7C-A736-3A2FC1575204"}
 */
var vg_archivo_nombre = null;

/**
 * @properties={typeid:24,uuid:"784CD050-3061-4E12-8F62-633D4F888D58"}
 */
function InicializaParametros(){
	
	databaseManager.setAutoSave(false)

	application.setNumpadEnterAsFocusNextEnabled(true)
	
	globals.mx_usuario_id = security.getUserUID()
	globals.mx_empresa_id = ag_usuariovigente.emp_id
	
	databaseManager.addTableFilterParam('Sistemas',null,'emp_id','=',globals.mx_empresa_id)
	
	application.addClientInfo('Usuario: '+ ag_usuariovigente.usu_id +' - ' + ag_usuariovigente.usu_nombre)
	application.addClientInfo('Empresa: '+ globals.mx_empresa_id   +' - ' + ag_empresavigente.emp_nombre)
}

/**
 * @properties={typeid:24,uuid:"885DA5E5-A6F0-4F01-AA0C-1FE468DDBA38"}
 */
function Cerrar_Solucion() 
{
	databaseManager.revertEditedRecords()
	
	if (application.isInDeveloper()) {
		application.closeSolution()
	} else {
		application.closeSolution('Sistemas','InicializaArgento')
	}
}


/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param empresa
 * @param pto_vta
 * @param com_cod
 * @param accion
 *
 * @properties={typeid:24,uuid:"113B950F-1A83-4C18-BB20-3E764C983B61"}
 */
//function pg_leer_numeracion(empresa, pto_vta, com_cod, accion) {
//
////	var empresa = arguments[0]
////	var pto_vta = arguments[1]
////	var com_cod = arguments[2]
////	var accion  = arguments[3]
//	                        
//	var numero = 0
//	                      
//	 /** @type {JSFoundset<db:/Interdata/adn_numeraciones>}*/
//	var fs_numeraciones = databaseManager.getFoundSet('Interdata', 'adn_numeraciones')
//	databaseManager.recalculate(fs_numeraciones)
//	fs_numeraciones.find()
//	fs_numeraciones.empresa_id = empresa
//	fs_numeraciones.nc_pto_vta = pto_vta
//	fs_numeraciones.nc_com_cod = com_cod
//	fs_numeraciones.search()
//	var clavePrimaria=fs_numeraciones.nc_id
//	
//	var cantidad = databaseManager.getFoundSetCount(fs_numeraciones)
//	
//	if (cantidad == 0) {
//		
//		numero = 1
//		
//		fs_numeraciones.newRecord()
//		fs_numeraciones.empresa_id = empresa
//		fs_numeraciones.nc_pto_vta = pto_vta
//		fs_numeraciones.nc_com_cod = com_cod
//		fs_numeraciones.nc_ultimo_numero = numero
//		fs_numeraciones.nc_nombre = 'Generado Automaticamente.'
//		fs_numeraciones.nc_ult_acc_fec = new Date()
//		fs_numeraciones.nc_ult_acc_ope = globals.mx_usuario_id
//		
//		databaseManager.saveData(fs_numeraciones.getSelectedRecord())
//	} else {
//		fs_numeraciones.setSelectedIndex(1)
//		numero = fs_numeraciones.nc_ultimo_numero + 1 //Leer: Devuelve proximo numero sin actualiar DB			
//		if (accion == 'A') {
//			
//			var contador=0
//			var bloqueo=databaseManager.acquireLock(fs_numeraciones,0)
//			while (!bloqueo)
//			{
//				bloqueo=databaseManager.acquireLock(fs_numeraciones,0)
//				contador=contador+1
//				if(contador==4000)
//				{
//					contador=0
//					globals.VentanaGenerica(0,'Atención', 'Aguarde un momento', 'info', controller.getName(), 'Ok', '',null,null,null,null,null,null)
//				}
//			}
//			fs_numeraciones.loadRecords(clavePrimaria)
//			numero = fs_numeraciones.nc_ultimo_numero + 1
//			fs_numeraciones.nc_ultimo_numero=numero
//			databaseManager.saveData(fs_numeraciones.getSelectedRecord())
//			databaseManager.releaseAllLocks()
//		}
//	}
//	return numero	
//}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param moneda_id
 *
 * @properties={typeid:24,uuid:"FF2BDA4C-9A3F-4B1E-B7DB-416250050662"}
 */
//function pg_leer_cotizacion_me(moneda_id) {
//	 /** @type {JSFoundset<db:/Interdata/adn_monedas>}*/	
//	var fs_cotiza = databaseManager.getFoundSet('Interdata', 'adn_monedas')
//	fs_cotiza.find()
//	fs_cotiza.mon_id = moneda_id
//	fs_cotiza.search()
//	
//	var tmp_me = new Array()
//	
//	if (fs_cotiza.getSize() >= 1) {
//		tmp_me.push(fs_cotiza.mon_cotiz_imp, fs_cotiza.mon_cotiz_fec)
//	} else {
//		tmp_me.push(1, null)
//	}
//
//	return tmp_me
//	
//}

/**
 * TODO generated, please specify type and doc for the params
 * @param record
 *
 * @properties={typeid:24,uuid:"C3BAFBC6-6CE8-4717-8068-07378BF09550"}
 */
//function pg_autidoria_tabla(record) {
//
//	 /** @type {JSFoundset<db:/Interdata/adn_auditoria>}*/
//	var fs_auditoria = databaseManager.getFoundSet('Interdata', 'adn_auditoria')
//	
//	var table_name = record.foundset.getDataSource().split('/')[2];
//	var pk_value_of_the_record = record.getPKs()[0]; //When multi select is not done
//	var modified_by_user_idx = globals.mx_usuario_id
//	var modification_date = application.getServerTimeStamp()
//
//	/** @type {JSDataSet} */
//   var dataset = record.getChangedData();//it will return all the changed data of type JSDataSet
//
//   //Loop through the modified fields
//   for( var cnt = 1 ; cnt <= dataset.getMaxRowIndex() ; cnt++ )
//      {
//           var field_name = dataset.getValue(cnt, 1);
//           var old_value = dataset.getValue(cnt, 2);
//           var new_value = dataset.getValue(cnt, 3);
//		
//           fs_auditoria.newRecord()
//           fs_auditoria.audit_tabla = table_name
//           fs_auditoria.audit_pk_valor = pk_value_of_the_record
//           fs_auditoria.audit_usuario = modified_by_user_idx
//           fs_auditoria.audit_fecha = modification_date
//           fs_auditoria.audit_campo = field_name
//           fs_auditoria.audit_valor_anterior = old_value
//           fs_auditoria.audit_valor_nuevo = new_value
//           databaseManager.saveData(fs_auditoria.getSelectedRecord())
//     }
//}

/**
 * @properties={typeid:24,uuid:"0784A58A-268E-4646-97DC-C14751C4EBB7"}
 */
function Ir_a_Home() {
	databaseManager.revertEditedRecords()
	application.showForm('InicioSolucion')
}


/**
 * TODO generated, please specify type and doc for the params
 * @param dataset
 *
 * @properties={typeid:24,uuid:"E4F37365-FCB9-4BDB-BAE6-42DF405787C4"}
 */
//function exportarDataset(dataset) {
//	var csv = dataset.getAsText(';','\r\n',null,true)
//	var vOS = application.getOSName();
//	if(utils.stringPatternCount(vOS, 'Windows') == 1){
//		if (!plugins.file.createFolder('c:/tmp'))
//			application.output("Carpeta c:/tmp ya creada.");
//	} else {
//		if (!plugins.file.createFolder('/home/tmp'))
//			application.output("Carpeta /home/tmp ya creada.");
//	}
//	
//	var success = null
//	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
//		{
//			success = plugins.file.writeTXTFile('/home/tmp/' + controller.getName() + '.csv' ,csv)
//		}else
//		{
//			var file = plugins.file.showFileSaveDialog();
//				if (file) 
//				{
//				success = plugins.file.writeTXTFile(file.getAbsolutePath()+'.csv',csv);
//				}
//		}	
//}

/**
 * TODO generated, please specify type and doc for the params
 * @param imagen_id
 *
 * @properties={typeid:24,uuid:"726C04C0-F927-4860-B72C-97D9299AF1CE"}
 */
//function archivoAdjuntoMostrar(imagen_id) {
//	
//	/** @type {JSFoundset<db:/Interdata/adn_adjuntos>}*/
//	var fs_adjunto = databaseManager.getFoundSet('Interdata','adn_adjuntos')
//	fs_adjunto.loadRecords(imagen_id)
//
//	var vOS = application.getOSName();
//
//	if(utils.stringPatternCount(vOS, 'Windows') == 1){
//		if (!plugins.file.createFolder('c:/tmp')) {
//			application.output("Carpeta ya creada.");
//		}
//	}
//
//	var tempfilename='/tmp/' + fs_adjunto.adjunto_filename
//	plugins.file.writeFile(tempfilename,fs_adjunto.adjunto_adjunto)
//	
//	if(utils.stringPatternCount(vOS, 'Windows') == 1){
//   		application.executeProgramInBackground( 'rundll32', ['url.dll,FileProtocolHandler', 'c:/'+tempfilename]);
//	}
//	else if(utils.stringPatternCount(vOS, 'FreeBSD') == 1 || utils.stringPatternCount(vOS, 'Linux') == 1){
//   		application.executeProgramInBackground('mozilla', [tempfilename]);
//	}
//	else if(utils.stringPatternCount(vOS, 'Mac') == 1){
//   		application.executeProgramInBackground('open', [tempfilename]);
//	}	
//}

/**
 * TODO generated, please specify type and doc for the params
 * @param filename
 *
 * @properties={typeid:24,uuid:"0A667B33-1DFB-422D-ACCD-77B9399A6D54"}
 */
//function archivoAdjuntoAdjuntar(filename) {
//	
//	globals.vg_archivo_id = 0
//	
//	if (!filename) {
//		return
//	}
//	
//	/**@type {plugins.file.JSFile}*/
//    var datos = filename[0]
//    var vl_adj_filename 	= datos.getName()
//    var normalizedFileName 	= "";
//    normalizedFileName 		= utils.stringReplace(datos.getPath(),'\\','/')    //make windows path like unix path
//    var vl_adj_filepath 	= normalizedFileName
//    var a 					= vl_adj_filename.lastIndexOf(".")
//    var vl_adj_extension 	= vl_adj_filename.substring(a+1)
//    var vl_adj_size 		= datos.size()
//    var vl_adj_adjunto 		= plugins.file.readFile(filename)
// 
//	if (globals.vg_archivo_nombre == null || globals.vg_archivo_nombre == '') {
//		globals.vg_archivo_nombre = 'Imagen Principal.'
//	} 
//    var vl_adj_descripcion	= globals.vg_archivo_nombre
//	
//    //var vl_adj_new			= 1 // Indicar que se va a grabar el adjunto al finalizar.
//	
//	 /** @type {JSFoundset<db:/Interdata/adn_adjuntos>}*/
//	var fs_adj = databaseManager.getFoundSet('Interdata','adn_adjuntos')
//	fs_adj.newRecord()
//	fs_adj.adjunto_tabla_id 	= globals.vg_archivo_tabla_id
//	fs_adj.home_funcion_codigo 	= globals.vg_archivo_funcion_codigo
//	fs_adj.adjunto_descripcion	= vl_adj_descripcion
//	fs_adj.adjunto_adjunto 		= vl_adj_adjunto
//	fs_adj.adjunto_filename 	= vl_adj_filename
//	fs_adj.adjunto_path 		= vl_adj_filepath
//	fs_adj.adjunto_size 		= vl_adj_size
//	fs_adj.adjunto_extension 	= vl_adj_extension
//	databaseManager.saveData(fs_adj)
//	
//	// Seteo de variables globales.
//	globals.vg_archivo_id 		= fs_adj.adjunto_id
//	globals.vg_archivo_imagen 	= vl_adj_adjunto
//	
//}

/**
 * TODO generated, please specify type and doc for the params
 * @param usuario
 * @param titulo
 * @param mensaje
 * @param icono
 * @param formulario
 * @param btn1
 * @param metodo1
 * @param btn2
 * @param metodo2
 * @param btn3
 * @param metodo3
 * @param btn4
 * @param metodo4
 *
 * @properties={typeid:24,uuid:"FFB80B32-1F55-4696-9C33-F09EFF12E6F9"}
 */
function VentanaGenerica(usuario,titulo,mensaje,icono,formulario,btn1,metodo1,btn2,metodo2,btn3,metodo3,btn4,metodo4) 
{
	
	if(!btn1) btn1 = 'OK'
	if(!btn2) btn2 = null
	if(!btn3) btn3 = null
	if(!btn4) btn4 = null
			
	//setup buttons
	forms.ventana_generica.setear_botones(btn1, btn2, btn3, btn4)
	
	if(!titulo || titulo == undefined) titulo = ''
		if(!mensaje || mensaje == undefined) mensaje = ''
		forms.ventana_generica.hide_allIcons();
		forms.ventana_generica.vg_usuario = usuario
		forms.ventana_generica.vg_titulo = titulo
		forms.ventana_generica.vg_mensaje = mensaje
		forms.ventana_generica.vg_icono = icono
		forms.ventana_generica.vg_form=formulario
		forms.ventana_generica.vg_boton1=btn1
		forms.ventana_generica.vg_boton2=btn2
		forms.ventana_generica.vg_boton3=btn3
		forms.ventana_generica.vg_boton4=btn4
		forms.ventana_generica.vg_metodo1=metodo1
		forms.ventana_generica.vg_metodo2=metodo2
		forms.ventana_generica.vg_metodo3=metodo3
		forms.ventana_generica.vg_metodo4=metodo4
		
		switch( icono )
		{
			case 'error': forms.ventana_generica.show_iconError(); break;
			case 'info': forms.ventana_generica.show_iconInfo(); break;
			case 'question': forms.ventana_generica.show_iconQuestion(); break;
			case 'warning': forms.ventana_generica.show_iconWarning(); break;
			case 'forbidden': forms.ventana_generica.show_iconForbidden(); break;
			default: forms.ventana_generica.show_iconInfo();
		}
		
		var win = application.createWindow('ventanaGenerica', JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
        win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= titulo
		win.show(forms.ventana_generica);		

	}

	
/**
 * @AllowToRunInFind
 * @properties={typeid:24,uuid:"25370AD7-6902-4805-9FDD-A4F63BD68195"}
 */
function CargarMenu()
{
	SacarMenu()
	
	var menubar = plugins.window.getMenuBar()
		menubar.setVisible(true)
		
	/** @type {JSFoundset<db:/Sistemas/menus>}*/
	var fs_menus = databaseManager.getFoundSet('Sistemas','menus')	
		fs_menus.find()
		fs_menus.modulo_id = scopes.globals.mx_modulo_id
		fs_menus.menu_principal = 1
		fs_menus.search()
		fs_menus.sort('menu_orden asc')
		
	for(var i=1; i<=fs_menus.getSize();i++)
	{
		var record = fs_menus.getRecord(i)
		/** @type {plugins.window.Menu} */
		var titulo = menubar.addMenu()
			titulo.text = record.menu_titulo
			titulo.setEnabled(BuscaPermisos(record.menu_id))
			titulo.setMnemonic(record.menu_teclas_rapidas)
				
		/** @type {JSFoundset<db:/Sistemas/menus>}*/
		var fs_submenu = databaseManager.getFoundSet('Sistemas','menus')	
			fs_submenu.find()
			fs_submenu.menu_dependencia = record.menu_id
			fs_submenu.search()	
			fs_submenu.sort('menu_orden asc')
			
		if(fs_submenu.getSize()>0)
		{
			for(var j=1; j<=fs_submenu.getSize();j++)
			{
				var record_submenu = fs_submenu.getRecord(j)
				if(record_submenu.menu_principal==3)
				{
					var sub_titulo = titulo.addMenu(record_submenu.menu_titulo)
						sub_titulo.setEnabled(BuscaPermisos(record_submenu.menu_id))
						sub_titulo.setMnemonic(record_submenu.menu_teclas_rapidas)
						sub_titulo.setIcon(record_submenu.menu_icon)
						
					/** @type {JSFoundset<db:/Sistemas/menus>}*/
					var fs_submenu1 = databaseManager.getFoundSet('Sistemas','menus')	
						fs_submenu1.find()
						fs_submenu1.menu_dependencia = record_submenu.menu_id
						fs_submenu1.search()
						fs_submenu1.sort('menu_orden asc')
					for(var k=1; k<=fs_submenu1.getSize();k++)
					{
						var record_submenu1 = fs_submenu1.getRecord(k)
						if(record_submenu1.menu_principal==3)
						{
							var sub_titulo1 = sub_titulo.addMenu(record_submenu1.menu_titulo)
								sub_titulo1.setEnabled(BuscaPermisos(record_submenu1.menu_id))
								sub_titulo1.setMnemonic(record_submenu1.menu_teclas_rapidas)
								sub_titulo1.setIcon(record_submenu1.menu_icon)
								
							/** @type {JSFoundset<db:/Sistemas/menus>}*/
							var fs_submenu2 = databaseManager.getFoundSet('Sistemas','menus')	
								fs_submenu2.find()
								fs_submenu2.menu_dependencia = record_submenu1.menu_id
								fs_submenu2.search()
								fs_submenu2.sort('menu_orden asc')
							for(var m=1; m<=fs_submenu2.getSize();m++)
							{
								var record_submenu2 = fs_submenu2.getRecord(m)
									
									sub_titulo1.addMenuItem(record_submenu2.menu_titulo,forms[globals.mx_modulo_inicio][record_submenu2.menu_funcion],record_submenu2.menu_icon,record_submenu2.menu_teclas_rapidas,BuscaPermisos(record_submenu2.menu_id))
							}
						}
						else
						{
							sub_titulo.addMenuItem(record_submenu1.menu_titulo,forms[globals.mx_modulo_inicio][record_submenu1.menu_funcion],record_submenu1.menu_icon,record_submenu1.menu_teclas_rapidas,BuscaPermisos(record_submenu1.menu_id))
						}
					}
				}	
				else
				{
					titulo.addMenuItem(record_submenu.menu_titulo,forms[globals.mx_modulo_inicio][record_submenu.menu_funcion],record_submenu.menu_icon,record_submenu.menu_teclas_rapidas,BuscaPermisos(record_submenu.menu_id))
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"2BEAB674-25C0-49D7-8F8B-6D7882CD4419"}
 */
function SacarMenu()
{
	plugins.window.getMenuBar().removeAllMenus()
	plugins.window.setToolBarAreaVisible(false)	
}

/**
 * @param {Number} p_menu_id
 * @return {Boolean} 
 * @properties={typeid:24,uuid:"CE895508-EBFE-428E-97EB-68115C30674A"}
 * @AllowToRunInFind
 */
function BuscaPermisos(p_menu_id)
{
	/** @type {JSFoundset<db:/Sistemas/accesos>}*/
	var fs_accesos = databaseManager.getFoundSet('Sistemas','accesos')	
		fs_accesos.find()
		fs_accesos.menu_id = p_menu_id
		fs_accesos.modulo_id = scopes.globals.mx_modulo_id
		fs_accesos.usu_id = scopes.globals.mx_usuario_id
		fs_accesos.search()
	
	if(fs_accesos.getSize()>0)
	{
		if(fs_accesos.acc_si_no != null)
		{
			if(fs_accesos.acc_si_no == 1)
			{
				return true
			}
			else
			{
				return false
			}
		}
		else
		{
			return false
		}
	}
	else
	{
		
		fs_accesos.newRecord()
		fs_accesos.modulo_id = scopes.globals.mx_modulo_id
		fs_accesos.menu_id = p_menu_id
		fs_accesos.usu_id = scopes.globals.mx_usuario_id
		
		
		if(ag_usuariovigente.usu_nivel_acceso==99)
		{
			fs_accesos.acc_si_no = 1
			databaseManager.saveData(fs_accesos)
			return true
		}
		else
		{
			fs_accesos.acc_si_no = 0
			databaseManager.saveData(fs_accesos)
			return false
		}
	}
}




/**
 * Devuelve un numero aleatorio de 8 digitos
 * @return {Number}
 * @properties={typeid:24,uuid:"D8D3804E-4B75-4492-B8BF-B37B32A66AB3"}
 */
function tmpRandomNumber() 
{
	var rnd = Math.random().toFixed(8)
	var nro = utils.stringToNumber(rnd.substr(2))
	var resultado = Math.abs(nro)
	return resultado
}
