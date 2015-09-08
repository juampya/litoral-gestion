/**
 * @properties={type:4,typeid:36,uuid:"73BFE713-7853-41F2-8ECD-98F6DD7964E0"}
 */
function calc_edad()
{
	if(paciente_fecha_naci!=null)
	{
		var anos = application.getServerTimeStamp().getFullYear() - paciente_fecha_naci.getFullYear()
		var mes  = (application.getServerTimeStamp().getMonth()+1) - (paciente_fecha_naci.getMonth()+1)
		if (mes < 0)
		{
			anos = anos - 1;
		} 
		else
		{	
			if (mes == 0) 
			{
				var dia = application.getServerTimeStamp().getDate() - paciente_fecha_naci.getDate()
			    if (dia > 0)
			    {
			    	anos = anos - 1;
			    }
		    }
		}
		return anos;
	}
	else
	{
		return null
	}
}
