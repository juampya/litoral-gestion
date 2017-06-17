/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2755DBCF-FF60-4DF4-83AF-13ECD403ABAD",variableType:4}
 */
var vl_empresa = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param mes
 * @param anio
 *
 * @properties={typeid:24,uuid:"05B485A9-352C-4469-B903-34609AE6CCF3"}
 */
function ultimoDiaMes(mes, anio) 
{
	var dias = 31
	if(mes == 4 || mes == 6 || mes == 9 || mes == 11)
	{
		dias = 30
	}
	if(mes == 2)
	{
		dias = 28
		 var bisiesto = ((anio % 4 == 0) && ((anio % 100 != 0) || (anio % 400==0)))
		 if(bisiesto)
		 {
			dias = 29
		 }
	}
	
	return dias
}

/**
 * TODO generated, please specify type and doc for the params
 * @param mensaje
 * @param formulario
 *
 * @properties={typeid:24,uuid:"AE62B464-C3F5-497F-BAEB-9411883AB0B0"}
 */
function ventanaAceptar(mensaje,formulario) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atención",mensaje,"atention",formulario,"Aceptar","",null,null,null,null,null,null)
}

/**
 * TODO generated, please specify type and doc for the params
 * @param nombre
 * @param titulo
 * @param formulario
 *
 * @properties={typeid:24,uuid:"395CD442-9581-4A40-9641-777FE8147D4E"}
 */
function ventanaFormulario(nombre,titulo,formulario) 
{
	var win1 = application.createWindow(nombre, JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= titulo;
	win1.show(forms[formulario]);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param mensaje
 * @param metodoSi
 * @param MetodoNo
 * @param formulario
 *
 * @properties={typeid:24,uuid:"541B03C6-E60A-4AEE-AFC5-FA7E05C4F450"}
 */
function ventanaSiNo(mensaje,metodoSi,MetodoNo,formulario) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion",mensaje,"atention",formulario,"No",MetodoNo,"Si",metodoSi,null,null,null,null)
}

/**
 * @AllowToRunInFind
 * @return {Number}
 * @properties={typeid:24,uuid:"7DDF7555-6BEC-4CF0-BBC8-EC2E0BEF3A42"}
 */
function UltimoNroFicha()
{
	/** @type {JSFoundSet<db:/sistemas/paciente>} */
	var fs_pac = databaseManager.getFoundSet('sistemas','paciente')
		fs_pac.loadAllRecords()
		fs_pac.sort('paciente_nro_ficha desc')
		fs_pac.getRecord(1)
		
		return fs_pac.paciente_nro_ficha
}