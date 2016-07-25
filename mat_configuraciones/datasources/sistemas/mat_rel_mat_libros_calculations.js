/**
 * @properties={type:93,typeid:36,uuid:"6D9001A6-D1FF-4292-BDBD-5BB96B5B27FF"}
 */
function calc_libro_fecha_est_devol()
{
	if(rel_fecha_salida!=null && rel_dias_prestamo!=null)
	{
		return plugins.DateUtils.addDays(rel_fecha_salida,rel_dias_prestamo)
	}
	else
	{
		return null
	}
}
