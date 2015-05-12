/**
 * @properties={type:12,typeid:36,uuid:"21E5FDB1-C41A-4466-B139-6D16A090E247"}
 */
function calc_tiempo_espera()
{
	if(turno_hora_entra!=null && turno_hora!=null)
	{
		var  t1 = new Date()
		var  t2 = new Date()
		 
		t1.setHours(turno_hora_entra.getHours(), turno_hora_entra.getMinutes());
		t2.setHours(turno_hora.getHours(), turno_hora.getMinutes());
		 
		//Aquí hago la resta
		t1.setHours(t1.getHours() - t2.getHours(), t1.getMinutes() - t2.getMinutes());
		
		var tmp_hor_espera = ""
		var tmp_min_espera = ""
		
		if(t1.getHours()<10)
		{
			tmp_hor_espera = "0"
		}
		if(t1.getMinutes()<10)
		{
			tmp_min_espera = "0"
		}
		
		var espera = tmp_hor_espera+t1.getHours().toString() +":"+tmp_min_espera+ t1.getMinutes().toString() 
		
		return espera
	}
	
	return null
  
}
