
/**
 * @properties={typeid:24,uuid:"CE0D5CFE-9043-4DAC-9F9A-188E391BFE11"}
 */
function progressBar()
{
	elements.progress.visible = true // show  progress bar
    elements.progress.orientation = 0 //(0=hor(default) 1=vertical)
    elements.progress.stringPainted = true // enables showing strings inside the progres bar
    elements.progress.string = "Starting script..."
    elements.progress.value =0 // initialise value of the progres bar
    elements.progress.minimum = 0 // min value allowed
    elements.progress.maximum = 300 //max value allowed

    var percentage =0
    for (var i=0 ; i<300 ; i++)
    {
       elements.progress.value = i
       //application.sleep(10)//simulates time needed to perform a loop
       percentage = elements.progress.getPercentComplete()
       elements.progress.string = "Looped through "+i+" records.Completed "+parseInt((percentage*100).toString())+"%. "
       application.updateUI() //refresh user interface
    }
    elements.progress.string = "Script Completed"
    application.beep()//signal when ended
    application.sleep(1000) // bar remains visible 1 more second before disappearing
    elements.progress.visible= false
    plugins.dialogs.showInfoDialog( '',  'Script completed',  'OK')
}


/**
 * TODO generated, please specify type and doc for the params
 * @param max
 * @param min
 * @param val
 *
 * @properties={typeid:24,uuid:"298B5EE5-1F1D-4D00-944B-0851F694B4F7"}
 */
function progressBar2(max, min, val)
{
	elements.progress.visible = true // show  progress bar
    elements.progress.orientation = 0 //(0=hor(default) 1=vertical)
    elements.progress.stringPainted = true // enables showing strings inside the progres bar
    elements.progress.string = "Starting script..."
    elements.progress.value =0 // initialise value of the progres bar
    elements.progress.minimum = min // min value allowed
    elements.progress.maximum = max //max value allowed

    var percentage =0

       elements.progress.value = val
       //application.sleep(10)//simulates time needed to perform a loop
       percentage = elements.progress.getPercentComplete()
       elements.progress.string = "Looped through "+val+" records.Completed "+parseInt((percentage*100).toString())+"%. "
       application.updateUI() //refresh user interface

	  if(val == max)
	  {
	    elements.progress.string = "Script Completed"
	    application.beep()//signal when ended
	    application.sleep(1000) // bar remains visible 1 more second before disappearing
	    elements.progress.visible= false
	    plugins.dialogs.showInfoDialog( '',  'Script completed',  'OK')
	  }
}
