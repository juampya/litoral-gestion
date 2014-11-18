dataSource:"db:/sistemas/mat_rel_mat_sol",
items:[
{
formIndex:3,
horizontalAlignment:0,
imageMediaID:"5C432BE9-5CB5-48FB-A4BE-25A25C33D471",
location:"201,310",
mediaOptions:1,
onActionMethodID:"27015DA7-A5EE-4DC3-97DB-55848E752932",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"105,30",
text:"Grabar",
typeid:7,
uuid:"17BCA646-8C76-4C3D-8BD1-1794A4C74A27"
},
{
anchors:11,
displaysTags:true,
location:"0,0",
size:"421,31",
styleClass:"sub_banner",
text:"%%vl_titulo%% Solicitud",
transparent:true,
typeid:7,
uuid:"1BE756AA-C63B-4119-9263-A28F521D0656"
},
{
formIndex:2,
horizontalAlignment:0,
imageMediaID:"30F5AD34-FE63-4B09-9E92-5545DDFA7392",
location:"84,310",
mediaOptions:1,
onActionMethodID:"FD248301-71F6-4ED4-80B1-9D9C667F1002",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"105,30",
text:"Cancelar",
typeid:7,
uuid:"38E37610-8EDC-4ECD-987D-F27CA10B7C3F"
},
{
formIndex:19,
horizontalAlignment:4,
labelFor:"mat_nro_matricula",
location:"5,51",
size:"114,20",
styleClass:"label_black",
text:"N° Solicitud:",
typeid:7,
uuid:"59C53E38-953C-4455-BD17-910249888F11"
},
{
dataProviderID:"rel_id",
editable:false,
formIndex:20,
format:"##########",
horizontalAlignment:0,
location:"124,51",
name:"rel_id",
size:"78,20",
styleClass:"disable",
typeid:4,
uuid:"5CBA9878-1A2E-413F-8EEF-777154DF515C"
},
{
formIndex:19,
horizontalAlignment:4,
labelFor:"mat_nro_matricula",
location:"5,101",
size:"114,20",
styleClass:"label_black",
text:"N° Matrícula:",
typeid:7,
uuid:"63122B6A-93D6-4E21-B4A9-FA1430D44BE0"
},
{
dataProviderID:"sol_id",
displayType:2,
editable:false,
formIndex:14,
location:"124,151",
onDataChangeMethodID:"C68E966F-C6BA-4D52-9E04-58772B7A4C08",
size:"279,20",
styleClass:"table_field",
typeid:4,
uuid:"670025ED-DA15-4DF5-8262-0A677E326B9C",
valuelistID:"759F0109-C7C8-4E99-9107-39D714ACD043"
},
{
dataProviderID:"rel_observasiones",
editable:false,
formIndex:30,
location:"124,201",
name:"rel_observasiones",
size:"283,20",
styleClass:"table_field",
typeid:4,
uuid:"6C81D6F0-6335-4738-A5A0-577AE6BBFA17"
},
{
dataProviderID:"rel_estado",
displayType:2,
editable:false,
formIndex:14,
location:"124,176",
name:"rel_estado",
onDataChangeMethodID:"C68E966F-C6BA-4D52-9E04-58772B7A4C08",
size:"114,20",
styleClass:"table_field",
typeid:4,
uuid:"7146841A-8F85-49A0-BA13-8E67DA8085F1",
valuelistID:"15C2B019-D947-4F79-88CF-105225E5E114"
},
{
dataProviderID:"mat_rel_mat_sol_to_mat_matriculados.mat_nombre",
editable:false,
formIndex:10,
location:"124,76",
name:"mat_nombre",
size:"279,20",
styleClass:"disable",
typeid:4,
uuid:"7F8235D9-BC46-4B08-BB3E-130BDB79D20B"
},
{
dataProviderID:"rel_fec_crea",
editable:false,
formIndex:16,
format:"dd-MM-yyyy",
horizontalAlignment:0,
location:"124,126",
name:"rel_fec_crea",
size:"114,20",
styleClass:"disable",
typeid:4,
uuid:"90ED591E-998A-45A4-A215-5D9A5ACA8B42"
},
{
dataProviderID:"mat_rel_mat_sol_to_mat_matriculados.mat_nro_matricula",
editable:false,
formIndex:20,
format:"##########",
horizontalAlignment:0,
location:"124,101",
name:"mat_nro_matricula",
size:"114,20",
styleClass:"disable",
typeid:4,
uuid:"948D2914-11BF-4D40-9D94-5121453A4B63"
},
{
formIndex:29,
labelFor:"rel_observasiones",
location:"5,201",
size:"114,20",
styleClass:"label_black",
text:"Dirigido a:",
typeid:7,
uuid:"ADAEB439-DF6C-417D-82B4-C7E2FFBF9FC9"
},
{
height:388,
partType:5,
typeid:19,
uuid:"AED7D73A-DCA8-46F9-A995-9AC93EE9F015"
},
{
formIndex:15,
horizontalAlignment:4,
labelFor:"rel_fec_crea",
location:"5,126",
size:"114,20",
styleClass:"label_black",
text:"Fecha Solicitud:",
typeid:7,
uuid:"B97EAC39-C471-469A-8303-61DDCEE53FC1"
},
{
formIndex:13,
horizontalAlignment:4,
labelFor:"rel_estado",
location:"5,176",
size:"114,20",
styleClass:"label_black",
text:"Estado:",
typeid:7,
uuid:"D2184999-4CF0-46FC-8A03-04FE07C9EBEF"
},
{
formIndex:3,
horizontalAlignment:0,
imageMediaID:"5DCF3933-F4EC-42F3-ADD3-50046ABDAF98",
location:"106,248",
mediaOptions:1,
name:"btn_nuevo_matriculado",
onActionMethodID:"6E07E36A-56F4-49C7-AC2C-55668E569258",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"186,30",
text:"Confirma Matriculación",
toolTipText:"Confirma Matriculación",
typeid:7,
uuid:"E51B1245-045B-4E6F-AE42-68C449A4C6B2"
},
{
height:32,
partType:1,
typeid:19,
uuid:"E7F9CE8F-2A4D-4230-878A-315E02D16F7B"
},
{
formIndex:13,
horizontalAlignment:4,
labelFor:"rel_estado",
location:"5,151",
size:"114,20",
styleClass:"label_black",
text:"Tipo de Solicitud:",
typeid:7,
uuid:"EB560884-EBD3-45C4-B1E0-6AFDB9910101"
},
{
formIndex:9,
horizontalAlignment:4,
labelFor:"mat_nombre",
location:"5,76",
size:"114,20",
styleClass:"label_black",
text:"Matriculado:",
typeid:7,
uuid:"EC9FAECD-5255-4A3E-9909-CF0CF26F8C6A"
}
],
name:"sm_frm_consulta_solicitudes_detalle",
navigatorID:"-1",
onShowMethodID:"95E0E70D-3C0B-439B-9C6E-3896AE2E6C8B",
showInMenu:true,
size:"422,270",
styleClass:"table",
styleName:"id_style",
typeid:3,
uuid:"E50E8D87-A37F-4C82-8B68-DE8B44E5F7C5"