/**
 * @properties={type:8,typeid:36,uuid:"E1EFF999-6A94-4A10-AD7E-A1D3EF6352D1"}
 */
function calc_caja_debe()
{
	if(caja_tipo==0)
	{
		return caja_importe
	}
	else
	{
		return 0
	}
}

/**
 * @properties={type:8,typeid:36,uuid:"66780F25-8A58-4E87-9505-B4FD99CDDA39"}
 */
function calc_caja_haber()
{
	if(caja_tipo==1)
	{
		return caja_importe
	}
	else
	{
		return 0
	}
}
