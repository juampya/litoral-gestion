dataSource:"db:/sistemas/agenda_excepciones",
items:[
{
anchors:11,
location:"0,0",
size:"1000,70",
styleClass:"banner",
text:"Dias No Laborables",
transparent:true,
typeid:7,
uuid:"0DE5746B-8D71-4839-AA5E-4E1A26949C29"
},
{
horizontalAlignment:0,
labelFor:"excep_tipo",
location:"130,130",
name:"excep_tipo_label",
size:"236,20",
styleClass:"label_black",
text:"Tipo",
typeid:7,
uuid:"25174BBC-D9F2-4927-A2C8-DDBE379CFA07"
},
{
background:"#ffff80",
dataProviderID:"vl_doctor",
formIndex:28,
location:"100,79",
name:"medico_id1",
size:"334,20",
styleClass:"disable",
text:"Medico Id",
typeid:4,
uuid:"2C699D31-D440-4257-8678-1DAFB649817E",
valuelistID:"5EC8F976-206C-40DA-BD6F-E3ACF4FBDFB5"
},
{
formIndex:27,
horizontalAlignment:4,
labelFor:"medico_id1",
location:"10,79",
name:"medico_id1_label",
size:"80,20",
styleClass:"label_black",
text:"Doctor/a:",
typeid:7,
uuid:"547009DD-CE0C-442D-B584-C30C22C3844E"
},
{
dataProviderID:"excep_observaciones",
editable:false,
location:"366,150",
name:"excep_observaciones",
size:"309,20",
text:"Excep Observaciones",
typeid:4,
uuid:"5B03A2C8-C8D6-46C4-B629-4945424C6032"
},
{
formIndex:10,
imageMediaID:"382776FF-9225-46C5-9AB8-3377B48C7283",
location:"174,33",
mediaOptions:1,
mnemonic:"",
name:"btn_nuevo",
onActionMethodID:"37E0243E-D794-48E3-B9F8-9FF8D470A24E",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Nuevo",
typeid:7,
uuid:"629E2EAA-8ACA-43A3-A66C-7701D2E701AB"
},
{
formIndex:26,
imageMediaID:"0E4EAC8B-534A-4773-A300-0556D9E21A1A",
location:"0,150",
mediaOptions:6,
onActionMethodID:"3C8353DA-40B0-493A-B805-AFC868C0C30F",
showClick:false,
size:"20,20",
text:"",
toolTipText:"Datos de la Visita",
transparent:true,
typeid:7,
uuid:"68E25A16-AAFA-4116-862A-A4743F1884F4"
},
{
height:109,
partType:1,
typeid:19,
uuid:"7F6E228F-174A-47FA-8A5F-5BA9064FBA7C"
},
{
formIndex:10,
imageMediaID:"B59F00BB-DE87-490B-92E9-55F93601EEA5",
location:"37,33",
mediaOptions:1,
name:"btn_volver",
onActionMethodID:"F2CCA58A-838B-4B3A-8176-8FCFA3FE5ADD",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Volver",
typeid:7,
uuid:"942B1245-9371-4A02-8FD1-16050271C97D"
},
{
dataProviderID:"excep_tipo",
editable:false,
location:"130,150",
name:"excep_tipo",
size:"236,20",
text:"Excep Tipo",
typeid:4,
uuid:"B44B47BF-8659-4839-9327-753354088EB8",
valuelistID:"904F89D9-478F-4134-8BD5-3F429F29A50F"
},
{
horizontalAlignment:0,
labelFor:"excep_observaciones",
location:"366,130",
name:"excep_observaciones_label",
size:"309,20",
styleClass:"label_black",
text:"Observaciones",
typeid:7,
uuid:"E2E0CC4D-4112-4E95-8381-0EB440AEBAD6"
},
{
dataProviderID:"excep_fecha",
editable:false,
format:"dd-MM-yyyy|mask",
horizontalAlignment:0,
location:"27,150",
name:"excep_fecha",
size:"105,20",
text:"Excep Fecha",
typeid:4,
uuid:"F18344EB-C74B-4A50-ABD0-750568A2BC5A"
},
{
horizontalAlignment:0,
labelFor:"excep_fecha",
location:"27,130",
name:"excep_fecha_label",
size:"105,20",
styleClass:"label_black",
text:"Fecha",
typeid:7,
uuid:"F6FC0664-5369-4B32-8EB1-4C428FB3B5FF"
},
{
height:480,
partType:5,
typeid:19,
uuid:"FAB05382-86B9-4380-9971-48354BB531A6"
}
],
name:"cli_agenda_no_laborable_med",
navigatorID:"-1",
onShowMethodID:"1F380DBD-DB1C-44AE-BB15-0274B5563164",
showInMenu:true,
size:"1000,480",
styleClass:"table",
styleName:"id_style",
typeid:3,
uuid:"739887E1-9FAC-459B-8351-07B20039EB64",
view:3