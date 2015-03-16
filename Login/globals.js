/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"34E99046-C235-44C4-BE74-B5A902AA89BD"}
 */
var mx_mesaje_html = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"35C4E549-2CE7-4A5F-9337-929B25F6055D",variableType:4}
 */
var mx_empresa_id = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"49CA7373-4735-4126-8AD1-82009AA6D31B"}
 */
var mx_mensaje_al_operador = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"29A9AA9C-648D-431F-A397-D59A31343A6B",variableType:4}
 */
var mx_perm_anular = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B6468C35-7A43-4834-8696-E1DB522C230A",variableType:4}
 */
var mx_perm_delete = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6E8035D0-AF3A-48B5-AD26-0D0F937E558D",variableType:4}
 */
var mx_perm_insert = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F297A464-3145-40AB-88F0-C57DBBF17EAF",variableType:4}
 */
var mx_perm_print = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"553503CF-0E69-4CCF-AE23-202C6862AC5C",variableType:4}
 */
var mx_perm_read = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EB90A127-3B8D-4E5A-B783-AFB94884505C",variableType:4}
 */
var mx_perm_update = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"311B9FD5-DD24-4F9B-9E6A-AAF8DB72E766"}
 */
var mx_rowBGEven = '#ffffff';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"608A98A5-7AB4-4D42-8AA9-A8A9EDA53CFE"}
 */
var mx_rowBGOdd = '#dedede';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"810C8E42-C013-452C-B855-80D5F3C8503D",variableType:4}
 */
var mx_usuario_id = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"78AF3C03-E22C-41C4-B543-8E8E64E7371B",variableType:4}
 */
var tmp_usuario = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"ECD9616B-C746-413F-82AE-E0FFA66897A3",variableType:4}
 */
var mx_modulo_id = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E2BB004B-8C51-408C-9C9D-AEBCCEC2BE72"}
 */
var mx_modulo_inicio = 'null';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4FBCC8E5-FB93-4F6D-9520-1A60B81936CF",variableType:4}
 */
var vg_navigator_nav_id = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8280E16D-6B11-4E04-A89E-147425142CF8",variableType:4}
 */
var mx_modulo_nivel = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E3E4A8B5-362F-45C7-8E81-4AACE8D43993"}
 */
var mx_modulo_nombre = null;

/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"0BACB970-CBE4-4F14-9212-CB0583C30EF0"}
 */
function onSolutionOpenLogin() {
	globals.mx_empresa_id = 1
	
    if (application.getApplicationType() == 5){
        application.output('Login: Formulario de Inicio',LOGGINGLEVEL.INFO)
        forms.Login.controller.show()
      }
}
