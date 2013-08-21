/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B2F965FA-D696-42A7-817D-836B1E018CFE"}
 */
var email = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B3FD7D99-4E12-4819-B65F-59A7CA2B12B8"}
 */
var msj_error = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"563F3F82-DE3E-4091-B11E-AC23B4C5D022"}
 */
var usuario = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F7C21AF9-53D6-45A3-9CD5-1C5BFC4BE939"}
 */
function onActionVolver(event) {
	application.getWindow().hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F2AC2126-B06B-4ACF-99DF-ADC136D73A7D"}
 */
function onActionEnviar(event) {
	
	if (usuario == null) {
		msj_error = 'Falta especificar el nombre de usuario!'
		controller.focusFirstField()
		return
	}
	if (email == null) {
		msj_error = 'Tiene que especificar su direccion de correo electronico.'
		controller.focusFirstField()
		return
	}
	
	var ok = new Array()
	ok = security.authenticate('Authenticator', 'RecuperarPassword', [usuario,email])
	if (ok[0] == '0') {
		msj_error = ok[1]
		controller.focusFirstField()
		return
		}
	
		application.getWindow().hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"89AD95CB-A032-42B7-A51F-EF0573E692E9"}
 */
function onShow(firstShow, event) {
	email = null
	usuario = null
	msj_error = null
}
