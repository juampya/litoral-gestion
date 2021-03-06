dataSource:"db:/sistemas/agenda_excepciones",
items:[
{
dataProviderID:"excep_fecha_fin",
displayType:5,
format:"dd-MM-yyyy|mask",
location:"320,138",
onDataChangeMethodID:"01B8809E-1BCA-4140-81E2-CBB58EFF6FE8",
size:"122,20",
text:"Excep Fecha",
typeid:4,
uuid:"15E24D2B-B77B-47FA-A062-8ABF504625C2"
},
{
formIndex:11,
horizontalAlignment:0,
labelFor:"",
location:"15,85",
size:"427,20",
styleClass:"label_black",
text:"Médico",
typeid:7,
uuid:"19CF29F5-6C7A-452A-AB87-5BB05691769E"
},
{
horizontalAlignment:4,
labelFor:"",
location:"15,138",
size:"80,20",
styleClass:"label_black",
text:"Fecha desde:",
typeid:7,
uuid:"47E47F07-F241-4FCF-9C4C-BABD7B63C58B"
},
{
horizontalAlignment:4,
labelFor:"",
location:"237,138",
size:"80,20",
styleClass:"label_black",
text:"Fecha hasta:",
typeid:7,
uuid:"4AEBDE1C-C997-4244-B81F-008CA6F8102A"
},
{
height:340,
partType:5,
typeid:19,
uuid:"6E1F73C7-5571-470C-A370-E6DC1EEEA257"
},
{
dataProviderID:"excep_observaciones",
displayType:1,
location:"15,222",
scrollbars:32,
size:"427,101",
text:"Excep Observaciones",
typeid:4,
uuid:"6F2256F2-E9B8-47A2-9080-DA101AEE6D12"
},
{
background:"#ffff91",
dataProviderID:"medico_id",
editable:false,
formIndex:12,
location:"15,105",
size:"427,20",
styleClass:"disable",
text:"Medico Id",
typeid:4,
uuid:"7706ECDF-BB03-4CB2-94FD-B1D1352E2EF9",
valuelistID:"5EC8F976-206C-40DA-BD6F-E3ACF4FBDFB5"
},
{
horizontalAlignment:0,
labelFor:"",
location:"15,203",
size:"427,20",
styleClass:"label_black",
text:"Observaciones",
typeid:7,
uuid:"7B5DFDB5-0DFF-43C2-B1D1-42F590F8B834"
},
{
anchors:11,
location:"0,0",
size:"463,70",
styleClass:"banner",
text:"Detalle Dias No Laborables",
transparent:true,
typeid:7,
uuid:"87815125-487F-4730-A7B0-F1AC9B58B2BA"
},
{
dataProviderID:"excep_tipo",
displayType:2,
editable:false,
location:"98,168",
size:"241,20",
text:"Excep Tipo",
typeid:4,
uuid:"9A9BEF07-8331-4D29-ABAF-E46C6B62E1A1",
valuelistID:"C6AA1383-AFE8-4865-9338-452F4EE8D3F8"
},
{
formIndex:10,
imageMediaID:"492E6F14-8334-48EB-8565-73505985E0B1",
location:"287,33",
mediaOptions:1,
name:"btn_borrar",
onActionMethodID:"E30C5F73-E0AC-46B8-B25F-020523700344",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Borrar",
typeid:7,
uuid:"B32265F8-5BF4-4D77-805D-F491D49C6ACD"
},
{
dataProviderID:"excep_fecha_ini",
displayType:5,
format:"dd-MM-yyyy|mask",
location:"98,138",
onDataChangeMethodID:"019E7E6F-5047-4F5E-801F-C983FC936C14",
size:"122,20",
text:"Excep Fecha",
typeid:4,
uuid:"BD163CA9-1871-4519-8411-D8C5A784A1FF"
},
{
horizontalAlignment:4,
labelFor:"",
location:"15,168",
size:"80,20",
styleClass:"label_black",
text:"Tipo:",
typeid:7,
uuid:"DE040777-F364-482E-865F-8EBF45442984"
},
{
formIndex:10,
imageMediaID:"5C432BE9-5CB5-48FB-A4BE-25A25C33D471",
location:"153,33",
mediaOptions:1,
name:"btn_grabar",
onActionMethodID:"3216CA12-4F45-4759-8F9C-6D3781D44F89",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Grabar",
typeid:7,
uuid:"DEC3C98D-6021-4B9D-80C2-64A97BF509B4"
},
{
formIndex:10,
imageMediaID:"B59F00BB-DE87-490B-92E9-55F93601EEA5",
location:"21,33",
mediaOptions:1,
name:"btn_volver",
onActionMethodID:"A21FD999-27C9-434D-B4EA-FC140C40CC8E",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Volver",
typeid:7,
uuid:"FAE2FE99-E854-45D9-B97D-F32D28971B1F"
}
],
name:"cli_agenda_no_laborable_dato_med",
navigatorID:"-1",
onShowMethodID:"E81CA1BD-5A48-406A-9EDE-B94664ED222F",
showInMenu:true,
size:"463,480",
styleClass:"formulario",
styleName:"id_style",
typeid:3,
uuid:"719AC453-B002-4567-900D-EBE75BB2D94A"