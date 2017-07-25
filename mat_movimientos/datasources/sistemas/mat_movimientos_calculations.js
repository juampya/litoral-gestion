/**
 * @properties={type:8,typeid:36,uuid:"8754DC11-D691-4115-A5E2-ECE702D7E4C6"}
 */
function calc_deuda()
{
	return 1;
}

/**
 * @properties={type:8,typeid:36,uuid:"30770D52-A9AF-4B84-8F75-BA065F755116"}
 * @AllowToRunInFind
 */
function calc_interes()
{
	var tmp_interes = 0
	//return plugins.DateUtils.getDayDifference(mov_fec_vto1,application.getServerTimeStamp())
	if(mov_estado==2)
	{
		//return plugins.DateUtils.getDayDifference(mov_fec_vto1,application.getServerTimeStamp())
		for (var index = 1; index <= mat_movimientos_to_mat_movimientos_det.getSize(); index++) 
		{
			var record = mat_movimientos_to_mat_movimientos_det.getRecord(index);
			if(record.ingr_id!=3 && record.ingr_id!=4)
			{
				tmp_interes= tmp_interes+mat_movimientos_to_mat_movimientos_det.det_importe*plugins.DateUtils.getDayDifference(mov_fec_vto1,application.getServerTimeStamp())*0.000821
			}
		}
	}
	return tmp_interes
}

/**
 * @properties={type:4,typeid:36,uuid:"E4CAA618-6FAC-44FD-A3F4-5AEF15BBB53E"}
 */
function calc_selecciona()
{
	return 0;
}
