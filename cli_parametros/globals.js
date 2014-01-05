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
