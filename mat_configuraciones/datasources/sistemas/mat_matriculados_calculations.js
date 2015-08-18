/**
 * @properties={type:12,typeid:36,uuid:"23438312-CCA6-416B-AAD2-DC59F9147E45"}
 */
function calc_mail_chek()
{
	return 0;
}

/**
 * @properties={type:4,typeid:36,uuid:"05EF0F7A-F1E5-46FD-A770-7B00971A3C2F"}
 */
function calc_cuotas_adeud()
{
	return 0;
}

/**
 * @properties={type:-4,typeid:36,uuid:"0CAB9A31-8F88-42FD-8434-F0E834993B24"}
 * @AllowToRunInFind
 */
function calc_semaforo()
{
	mat_matriculados_to_mat_movimientos.find()
	mat_matriculados_to_mat_movimientos.mov_estado = 0
	var cant = mat_matriculados_to_mat_movimientos.search()
	if(cant > 0)
	{
		return "media:///red_light.png"
	}
	else
	{
		return "media:///green_light.png"		
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"06C5AF15-DFA1-49E1-B0C8-4116BCB3310D"}
 */
function calc_web_registro()
{
	if(mat_web_login!=null)
	{
		return "SI"
	}
	else
	{
		return "NO"
	}
	
}
