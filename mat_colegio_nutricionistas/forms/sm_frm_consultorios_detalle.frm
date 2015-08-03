dataSource:"db:/sistemas/mat_consultorios",
items:[
{
anchors:11,
location:"0,202",
size:"829,27",
styleClass:"sub_banner",
text:"Movimientos de Habilitaciones",
transparent:true,
typeid:7,
uuid:"04FB33E6-FAA8-406E-A28A-B4620B4797C9"
},
{
formIndex:39,
location:"429,87",
size:"92,20",
styleClass:"label_black",
text:"Estado:",
typeid:7,
uuid:"09468569-1344-4103-8679-33C37AE4549E"
},
{
formIndex:39,
location:"429,111",
size:"92,20",
styleClass:"label_black",
text:"Vencimiento:",
typeid:7,
uuid:"0E1E3DB0-42E1-4C6D-9E81-E6986D1393ED"
},
{
dataProviderID:"mat_consultorios_to_mat_matriculados.calc_semaforo",
displayType:9,
editable:false,
formIndex:44,
horizontalAlignment:0,
location:"540,156",
name:"calc_semaforo",
scrollbars:36,
size:"36,20",
styleClass:"disable",
typeid:4,
uuid:"11359EB8-C0F9-492D-ABFC-C9ED1B6643B5"
},
{
formIndex:23,
location:"10,87",
size:"95,20",
styleClass:"label_black",
text:"Descrpción:",
typeid:7,
uuid:"15A11E07-DC53-49E6-896D-B355D4690CF5"
},
{
dataProviderID:"mat_id",
editable:false,
formIndex:48,
location:"109,156",
name:"mat_id",
size:"385,20",
styleClass:"disable",
typeid:4,
uuid:"1A565C50-C380-46E4-BAA8-3C6250D27A57",
valuelistID:"F6D88DD2-B460-48B8-9EC5-BF53D194215F"
},
{
dataProviderID:"consultorio_domicilio",
editable:false,
formIndex:28,
location:"109,110",
name:"consultorio_domicilio",
size:"315,20",
styleClass:"disable",
typeid:4,
uuid:"229FCE2F-3C0C-4A42-BCF3-D85AD66D714B"
},
{
enabled:false,
formIndex:1,
horizontalAlignment:2,
imageMediaID:"A89A8315-3ACF-4EC0-BD9C-148511E6B62F",
location:"225,37",
mediaOptions:1,
onActionMethodID:"E1BF4360-AFC7-4E3E-9C3A-E32AC5A9D2E6",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"105,30",
text:"XLS",
typeid:7,
uuid:"24223EAB-2BFD-4E71-84B2-2A55F741E23F",
visible:false
},
{
formIndex:23,
location:"10,110",
size:"95,20",
styleClass:"label_black",
text:"Domicilio:",
typeid:7,
uuid:"2783CEEF-798A-450F-86F2-223E4460B048"
},
{
dataProviderID:"localidad_id",
editable:false,
formIndex:30,
location:"109,133",
name:"localidad_id",
size:"223,20",
styleClass:"disable",
typeid:4,
uuid:"27BEB7B3-D42E-405D-85FF-F678DFB86D0D",
valuelistID:"5D57F02C-E6E9-435F-BE85-C5087CDF4A98"
},
{
dataProviderID:"consultorio_estado",
editable:false,
formIndex:44,
location:"523,87",
name:"calc_estado",
size:"114,20",
styleClass:"disable",
typeid:4,
uuid:"3A076FC9-7BB0-400C-BD2F-B2F9445A479B",
valuelistID:"D371DA30-4972-4D74-8D6D-E4B9F1EE7586"
},
{
height:197,
partType:1,
typeid:19,
uuid:"434EE9C4-AF27-496E-818A-CC389CCFB4FB"
},
{
dataProviderID:"mat_consultorios_to_localidades.localidades_to_departamentos.departamentos_to_provincias.provincia_nombre",
editable:false,
formIndex:36,
location:"634,133",
name:"provincia_nombre",
size:"140,20",
styleClass:"disable",
typeid:4,
uuid:"66F65E01-6AA3-4AC6-92DF-940B5622D4D7"
},
{
dataProviderID:"consultorio_id",
editable:false,
formIndex:26,
location:"707,87",
name:"consultorio_id",
size:"54,20",
styleClass:"disable",
typeid:4,
uuid:"6BBA66F4-CFA8-4E25-823D-0A995AE7F398"
},
{
formIndex:3,
imageMediaID:"B59F00BB-DE87-490B-92E9-55F93601EEA5",
location:"5,37",
mediaOptions:1,
onActionMethodID:"0B73BDA7-DE69-44C5-9335-798DBA15290E",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"105,30",
text:"Volver",
typeid:7,
uuid:"7A798319-3F6B-4037-A53C-39C1C21F5EE1"
},
{
formIndex:39,
location:"641,88",
size:"61,20",
styleClass:"label_black",
text:"ID:",
typeid:7,
uuid:"7AABA13C-A355-454E-B102-0EFFFACFB4AB"
},
{
dataProviderID:"consultorio_vto",
editable:false,
formIndex:46,
format:"dd/MM/yyyy",
horizontalAlignment:0,
location:"523,111",
name:"calc_fec_vto",
size:"114,20",
styleClass:"disable",
typeid:4,
uuid:"7D30E519-4A33-4B90-A833-B18DE2686898"
},
{
formIndex:39,
location:"499,156",
size:"39,20",
styleClass:"label_black",
text:"EDC:",
typeid:7,
uuid:"9274FC30-A284-49BD-9D9E-326B2B22D60C"
},
{
height:480,
partType:5,
typeid:19,
uuid:"9DB89E0E-59E2-4949-B99F-57ED1A55C2AC"
},
{
anchors:11,
location:"0,0",
size:"829,80",
styleClass:"banner",
text:"Detalle de Consultorio",
transparent:true,
typeid:7,
uuid:"A14F3805-D163-4EAC-B206-E4344E5B87B4"
},
{
enabled:false,
formIndex:1,
horizontalAlignment:2,
imageMediaID:"D9B98FB7-FA26-4B94-9344-A8F3D7B883AD",
location:"115,37",
mediaOptions:1,
onActionMethodID:"D8A0CBC8-1BD8-4701-8766-9204A377FA60",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"105,30",
text:"Imprimir",
typeid:7,
uuid:"A6B09EC0-7460-4485-9253-390A7C3F611F",
visible:false
},
{
formIndex:23,
location:"10,156",
size:"95,20",
styleClass:"label_black",
text:"Matriculado:",
typeid:7,
uuid:"AD859F86-4F2A-4F3E-AC78-6270BD8BF25E"
},
{
formIndex:39,
location:"570,133",
size:"61,20",
styleClass:"label_black",
text:"Prov.:",
typeid:7,
uuid:"C08038B7-C403-4A78-8468-4D876A4320B2"
},
{
formIndex:51,
items:[
{
containsFormID:"E2BF0A5F-29FA-4897-A3B4-CCBDB21FABA5",
location:"0,264",
relationName:"mat_consultorios_to_mat_rel_mat_consu",
text:"sm_frm_matriculados_consultorios_habilitaciones",
typeid:15,
uuid:"02E0D589-47E6-471F-9676-D9B5B4A442BD"
}
],
location:"0,234",
name:"tabs",
printable:false,
size:"829,241",
transparent:true,
typeid:16,
uuid:"CF3FE988-EBFD-46DD-B528-7145F7539E39"
},
{
formIndex:39,
location:"340,133",
size:"84,20",
styleClass:"label_black",
text:"Depto.:",
typeid:7,
uuid:"D358DB63-00A7-4F23-8132-323AD7E4379A"
},
{
dataProviderID:"mat_consultorios_to_localidades.localidades_to_departamentos.depar_descripcion",
editable:false,
formIndex:38,
location:"427,133",
name:"depar_descripcion1",
size:"140,20",
styleClass:"disable",
typeid:4,
uuid:"DE1961F0-FBCC-461E-8F7A-9314F79C6F25"
},
{
dataProviderID:"consultorio_nombre",
editable:false,
formIndex:34,
location:"109,87",
name:"consultorio_nombre",
size:"315,20",
styleClass:"disable",
typeid:4,
uuid:"E4C1D5A7-A8B1-4106-BEEB-9F1A955F9671"
},
{
formIndex:41,
location:"10,133",
size:"95,20",
styleClass:"label_black",
text:"Localidad:",
typeid:7,
uuid:"FB8F0035-A784-4A44-A8E6-FD25CAAC95AE"
},
{
dataProviderID:"consultorio_principal",
displayType:4,
editable:false,
formIndex:50,
horizontalAlignment:0,
location:"704,111",
name:"consultorio_principal",
size:"37,20",
styleClass:"disable",
typeid:4,
uuid:"FCB73C69-E6FE-4BBA-AA4B-C746D1320AEC"
},
{
formIndex:39,
location:"641,111",
size:"61,20",
styleClass:"label_black",
text:"Principal:",
typeid:7,
uuid:"FD4F8BD7-5A42-45AF-BE97-083172D39A8A"
}
],
name:"sm_frm_consultorios_detalle",
navigatorID:"-1",
onShowMethodID:"B3040C13-5772-4B0B-B115-52755385F662",
showInMenu:true,
size:"829,480",
styleClass:"formulario",
styleName:"id_style",
typeid:3,
uuid:"56DFDC53-90B4-4FE6-8F9C-323E54F9DE6D"