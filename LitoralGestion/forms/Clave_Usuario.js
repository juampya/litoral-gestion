/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CE27C33D-D24F-44A1-A01B-500D00D61145"}
 */
var nueva_passwd = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6A3FCBD9-D90C-4B1D-8549-B1085C425890"}
 */
var nueva_passwd_test = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D1E5CADF-8514-43F3-8A9D-E62E15B038AC"}
 */
var passwd_actual = null;

/**
 * @properties={typeid:24,uuid:"7F6A7B24-AE3F-4B6C-914A-16D4B01BE637"}
 */
function onActionVolver(event) 
{
	application.getWindow().destroy()
	application.getWindow().hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D4D9FB05-4D0D-429B-BA91-46C08F63E5CB"}
 */
function onShow(firstShow, event) 
{
	nueva_passwd = null
	nueva_passwd_test = null
	passwd_actual = null
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EC7B3842-D139-4EB6-A6C8-3B59D3111D08"}
 */
function onActionCambiar(event) 
{
	if (passwd_actual == null) 
	{
		globals.VentanaGenerica(ag_usuariovigente.usu_id,'Argento', 'Debe ingresar su clave actual.', 'info', controller.getName(), 'OK', '',null,null,null,null,null,null)
		return
	}

	if (nueva_passwd == null) 
	{
		globals.VentanaGenerica(ag_usuariovigente.usu_id,'Argento', 'La nueva contraseña no puede estar en blanco.', 'info', controller.getName(), 'OK', '',null,null,null,null,null,null)
		return
	}

	if (nueva_passwd.length < 8) 
	{
		globals.VentanaGenerica(ag_usuariovigente.usu_id,'Argento', 'La contraseña tienen que tener como minimo 6 caracteres.', 'info', controller.getName(), 'OK', '',null,null,null,null,null,null)
		return
	}

	if (nueva_passwd != nueva_passwd_test)
	{
		globals.VentanaGenerica(ag_usuariovigente.usu_id,'Argento', 'No coincide la contraseña y la verificacion.', 'info', controller.getName(), 'OK', '',null,null,null,null,null,null)
		return
	}

	if (passwd_actual != usu_password) 
	{
		globals.VentanaGenerica(ag_usuariovigente.usu_id,'Argento', 'La contraseña actual ingresada es incorrecta.', 'info', controller.getName(), 'OK', '',null,null,null,null,null,null)
		return
	}

	usu_password = nueva_passwd
	databaseManager.saveData()
	application.getWindow().hide()
}
