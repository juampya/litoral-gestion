/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"12D3B685-FA8E-4F9E-B622-1AE1BD416A63"}
 */
function onSolutionOpen() {

	//plugins.DateUtils.register('Interdata', 'Ym13NcZOW8jx6WSqs1ap6y/x3KbiXzZFan+SvHJiucEmXW5P3DqbIg==')
	
//	plugins.it2be_barcode.register("18I4TC81MKHKJBDHS66A0S7ET9U0JLU3002HOSUETL0GF2L5D3RM9QGL527MBE10E93REFN6K8C83EGBPQ8OL2D85TJ6RM4OVHC1D0IRU1DN08ELRDFSTP4V11GJRJ8EJEHCIG4U72OR3C9H4UD6M8K5LPT32TQOB52J6B3BK07FTT8G0ALQ7PB6JHRQFFFAV9JF2AFB6F387T7V4CGGD8PMM1BIB5GHARUIBV67EJ0J77RGHA9K69QJM4JQ789PQGELDU20QQP6JKULJHRSV1LG4QQO8UK5TI541UOTNMQSVSPI47L6D3195JRS44REAFHKM4AH55E4JCAG35VTG752QF117S1C694MS1IIH6QJJK7DR4ERA598VRINKBS2AKV1UFHEMPU47R2R5R0KJ2KM6L9KPBR8MH856065JQVULO464E47U6RLCA5T3FE89GANFRIUCVQOH35A7663MPDC2C49E1B1O0C7HLKL5O39VQMN6OQN7QDI56AJ046NC1L25DLHVL6PLTNQ5VNO62NJIRH0874CQREIIPCLME1H2T9GASJDMKLNVT8K30KPU16J9ROS7BT30U8V08P95D22QOBS75BQA2B45TOPC7KIA38QDFNRDOERMAVMO3SCITPPVC2LEAB2TG2Q6HN3H1R31L9QL90PRRT2CL8RFD3FDJ81FV1VRE01NVCKI1403NJ5VFBFC7ET5J5ICOSS35GVGI5PH1357C2U9GU1TN8I4T4J5020HB9O9UM91H7K2PGFHI5UIJCMHRBBFPAURCSRUJPUTAIL1PK1NRER5SEONFGVIH0C")

//	if (application.getApplicationType() != 5){
//        plugins.window.getMenuBar().setVisible(false)
//        plugins.window.setStatusBarVisible(false)
//		plugins.window.setToolBarAreaVisible(false)
//	}

	globals.InicializaParametros()
	
//	forms.InicioSolucion.controller.show()
}

/**
 * @properties={typeid:24,uuid:"4CEE11D9-4E0B-45A4-9845-EC2354D9685D"}
 */
function InicializaArgento(){
	
	if (application.getApplicationType() == 5){
		application.output('Argento: InicializaArgentoInWebCliet',LOGGINGLEVEL.INFO)
		forms.InicioLitoral.controller.show()
	}
}
