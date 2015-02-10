dataSource:"db:/sistemas/mat_consultorios",
items:[
{
formIndex:27,
horizontalAlignment:0,
labelFor:"",
location:"961,82",
size:"100,20",
styleClass:"label_black",
text:"Cantidad",
typeid:7,
uuid:"060B7D55-634B-46DD-8FA6-54C3344DE7ED"
},
{
anchors:11,
dataProviderID:"consultorio_id",
editable:false,
formIndex:26,
location:"0,160",
name:"consultorio_id",
size:"54,20",
typeid:4,
uuid:"07C5E974-CEE3-41AF-AE16-6A8E1296120A"
},
{
anchors:11,
dataProviderID:"consultorio_domicilio",
editable:false,
formIndex:28,
location:"367,160",
name:"consultorio_domicilio",
size:"195,20",
typeid:4,
uuid:"085C2F7A-ADD7-404B-A92B-0BDD396A1C25"
},
{
formIndex:39,
location:"718,85",
size:"92,20",
styleClass:"label_black",
text:"Vencimiento:",
typeid:7,
uuid:"093EC803-2D9B-4B9C-A943-F1DD52A2C5C7"
},
{
formIndex:33,
labelFor:"consultorio_nombre",
location:"55,140",
name:"consultorio_nombreo_label",
size:"315,20",
styleClass:"table_label",
text:"Descripción",
typeid:7,
uuid:"09460C0D-9662-4248-81CB-691689A96DE3"
},
{
dataProviderID:"mat_id",
editable:false,
formIndex:48,
location:"1293,160",
name:"mat_id",
size:"385,20",
typeid:4,
uuid:"0D5980A1-728E-4D22-B008-79BBADC8C78C",
valuelistID:"F6D88DD2-B460-48B8-9EC5-BF53D194215F"
},
{
anchors:11,
location:"0,0",
size:"1756,80",
styleClass:"banner",
text:"Consultorios ",
transparent:true,
typeid:7,
uuid:"0D9E4EA2-1CD0-4D4B-B230-C93CBBBF9F34"
},
{
formIndex:23,
location:"5,85",
size:"82,20",
styleClass:"label_black",
text:"Matriculado:",
typeid:7,
uuid:"16320831-E4F9-443E-85A1-1B9237FFCAA6"
},
{
anchors:11,
dataProviderID:"localidad_id",
editable:false,
formIndex:30,
location:"563,160",
name:"localidad_id",
size:"223,20",
typeid:4,
uuid:"172D523B-E90B-40C0-AB05-325928E3BB94",
valuelistID:"5D57F02C-E6E9-435F-BE85-C5087CDF4A98"
},
{
dataProviderID:"vl_localidad",
formIndex:42,
location:"512,85",
onDataChangeMethodID:"B6E38EA1-40CA-4528-8AF6-58CA3AC1082B",
size:"187,20",
typeid:4,
uuid:"18CA741F-B274-4348-96D5-BDA866840976",
valuelistID:"5D57F02C-E6E9-435F-BE85-C5087CDF4A98"
},
{
dataProviderID:"mat_consultorios_to_mat_matriculados.calc_semaforo",
displayType:9,
editable:false,
formIndex:44,
horizontalAlignment:0,
location:"1679,158",
name:"calc_semaforo",
scrollbars:36,
size:"36,20",
typeid:4,
uuid:"2B56C3E2-7009-4CEC-8590-7EB971DCD431"
},
{
formIndex:27,
labelFor:"consultorio_domicilio",
location:"367,140",
name:"consultorio_domicilio_label",
size:"195,20",
styleClass:"table_label",
text:"Domicilio",
typeid:7,
uuid:"319625C0-4DED-4939-AC7B-C92D7A3249B2"
},
{
formIndex:35,
labelFor:"provincia_nombre",
location:"927,140",
name:"provincia_nombre_label",
size:"140,20",
styleClass:"table_label",
text:"Provincia",
typeid:7,
uuid:"39CB40BC-6CDB-4198-8C64-7724ABC3D91D"
},
{
formIndex:29,
labelFor:"localidad_id",
location:"563,140",
name:"localidad_id_label",
size:"223,20",
styleClass:"table_label",
text:"Localidad",
typeid:7,
uuid:"3A4ED392-9AC0-476B-A67D-4C4F8041DF12"
},
{
formIndex:39,
location:"5,110",
size:"82,20",
styleClass:"label_black",
text:"Estado:",
typeid:7,
uuid:"3DEA05FA-816C-4F07-99F1-DF94CF00906A"
},
{
height:135,
partType:1,
typeid:19,
uuid:"40D40913-530A-4C92-B896-84B707D55DA5"
},
{
formIndex:41,
location:"415,85",
size:"92,20",
styleClass:"label_black",
text:"Localidad:",
typeid:7,
uuid:"51400C8F-6B44-4712-B326-A02FD38328BD"
},
{
formIndex:43,
labelFor:"calc_estado",
location:"1066,140",
name:"calc_estado_label",
size:"114,20",
styleClass:"table_label",
text:"Estado",
typeid:7,
uuid:"6754E120-3A4A-4092-94C0-63D7CE52D195"
},
{
formIndex:47,
labelFor:"mat_id",
location:"1293,140",
name:"mat_id_label",
size:"385,20",
styleClass:"table_label",
text:"Matriculado",
typeid:7,
uuid:"6C23189D-B79F-499D-869E-3E5A63A4F0C3"
},
{
formIndex:1,
horizontalAlignment:2,
imageMediaID:"D9B98FB7-FA26-4B94-9344-A8F3D7B883AD",
location:"225,37",
mediaOptions:1,
onActionMethodID:"04501E7E-B571-420D-B489-39CB8EB05A28",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"105,30",
text:"Imprimir",
typeid:7,
uuid:"6E37F746-1182-46A8-834E-4595D36A1AC6"
},
{
anchors:11,
dataProviderID:"mat_consultorios_to_localidades.localidades_to_departamentos.departamentos_to_provincias.provincia_nombre",
editable:false,
formIndex:36,
location:"927,160",
name:"provincia_nombre",
size:"140,20",
typeid:4,
uuid:"6E9352EF-AC2D-4C1F-8901-8CB0A7F5368F"
},
{
anchors:11,
dataProviderID:"consultorio_nombre",
editable:false,
formIndex:34,
location:"55,160",
name:"consultorio_nombre",
size:"315,20",
typeid:4,
uuid:"73CE043D-A3B1-4911-A01D-53B8833424A2"
},
{
dataProviderID:"vl_estado",
displayType:2,
editable:false,
formIndex:40,
location:"92,110",
onDataChangeMethodID:"B6E38EA1-40CA-4528-8AF6-58CA3AC1082B",
size:"123,20",
typeid:4,
uuid:"73FCB9BF-E696-4AAB-AAEA-453CC60F9724",
valuelistID:"D371DA30-4972-4D74-8D6D-E4B9F1EE7586"
},
{
formIndex:1,
horizontalAlignment:2,
imageMediaID:"215F84EA-D58C-4A1C-9C79-A197FBA32FAE",
location:"115,37",
mediaOptions:1,
onActionMethodID:"A12A5AD2-96D5-42CF-B2EC-1E41CD208532",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"105,30",
text:"Refrescar",
typeid:7,
uuid:"74C6F4FE-D855-46E0-9D0E-FFCDA7BD9DC1"
},
{
formIndex:1,
horizontalAlignment:2,
imageMediaID:"A89A8315-3ACF-4EC0-BD9C-148511E6B62F",
location:"335,37",
mediaOptions:1,
onActionMethodID:"CE6A25B2-8C32-455B-A083-6B91DB54E8CD",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"105,30",
text:"XLS",
typeid:7,
uuid:"78CBCE68-DDFC-4D7D-A18D-A5BD1548EFC2"
},
{
formIndex:45,
labelFor:"calc_fec_vto",
location:"1181,140",
name:"calc_fec_vto_label",
size:"112,20",
styleClass:"table_label",
text:"Fecha Vto.",
typeid:7,
uuid:"80D3847D-4163-4BC8-8C53-248CCAF8302F"
},
{
dataProviderID:"vl_departamento",
formIndex:40,
location:"512,110",
onDataChangeMethodID:"B6E38EA1-40CA-4528-8AF6-58CA3AC1082B",
size:"187,20",
typeid:4,
uuid:"89B84F93-1658-46AA-9DCA-9E1EDBB3CB6C",
valuelistID:"005E9D24-B0A7-440A-A8D1-3B3B902D82B8"
},
{
formIndex:39,
location:"415,110",
size:"92,20",
styleClass:"label_black",
text:"Departamento:",
typeid:7,
uuid:"94B3A4C3-84E6-445C-B837-2121D3EC0DB4"
},
{
formIndex:41,
labelFor:"calc_semaforo",
location:"1679,140",
name:"aggr_cant_reg_labelc",
size:"36,20",
styleClass:"table_label",
text:"EDC",
typeid:7,
uuid:"A33974F6-8BC8-463A-BD16-F867D9EA521D"
},
{
formIndex:37,
labelFor:"depar_descripcion1",
location:"786,140",
name:"depar_descripcion1_label",
size:"140,20",
styleClass:"table_label",
text:"Departamento",
typeid:7,
uuid:"AE54DB1C-E2BC-47DD-86AA-1B002F9C50DB"
},
{
dataProviderID:"vl_matriculado",
displayType:10,
formIndex:24,
location:"92,85",
onDataChangeMethodID:"B6E38EA1-40CA-4528-8AF6-58CA3AC1082B",
size:"318,20",
text:"Vl Matriculado",
typeid:4,
uuid:"AF131AC8-23DE-497A-8DF5-14E387C3EDD6",
valuelistID:"F6D88DD2-B460-48B8-9EC5-BF53D194215F"
},
{
anchors:11,
dataProviderID:"mat_consultorios_to_localidades.localidades_to_departamentos.depar_descripcion",
editable:false,
formIndex:38,
location:"786,160",
name:"depar_descripcion1",
size:"140,20",
typeid:4,
uuid:"BD431AB8-37A7-40AD-A972-64D6CFE2865D"
},
{
height:480,
partType:5,
typeid:19,
uuid:"C5FD6255-A736-4F03-BBEE-BEA41EA91101"
},
{
background:"#ffff93",
dataProviderID:"aggr_cantidad",
editable:false,
formIndex:28,
horizontalAlignment:4,
location:"961,102",
size:"100,20",
text:"Ag Cantidad",
typeid:4,
uuid:"DC1766D3-0396-47D4-B3BF-1E54DD9F162B"
},
{
formIndex:3,
imageMediaID:"B59F00BB-DE87-490B-92E9-55F93601EEA5",
location:"5,37",
mediaOptions:1,
onActionMethodID:"6EF4D5C8-434C-46D3-B41A-718F88D0FD9D",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"105,30",
text:"Volver",
typeid:7,
uuid:"E67F56D0-E310-4470-9416-0069E92DA838"
},
{
dataProviderID:"vl_vto",
displayType:5,
formIndex:40,
format:"MM-yyyy|mask",
location:"815,85",
onDataChangeMethodID:"B6E38EA1-40CA-4528-8AF6-58CA3AC1082B",
size:"116,20",
typeid:4,
uuid:"EE4BD3AC-4061-4B26-8982-EB640268A06B",
valuelistID:"005E9D24-B0A7-440A-A8D1-3B3B902D82B8"
},
{
anchors:11,
dataProviderID:"calc_fec_vto",
editable:false,
formIndex:46,
format:"dd/MM/yyyy",
horizontalAlignment:0,
location:"1181,160",
name:"calc_fec_vto",
size:"112,20",
typeid:4,
uuid:"F097A4F1-A0F7-4AB8-BBBA-BD7E1EFDF73D"
},
{
formIndex:25,
labelFor:"consultorio_id",
location:"0,140",
name:"consultorio_id_label",
size:"54,20",
styleClass:"table_label",
text:"ID",
typeid:7,
uuid:"FE7A9D92-2664-48CA-BA70-57CA764708D7"
},
{
anchors:11,
dataProviderID:"calc_estado",
editable:false,
formIndex:44,
location:"1066,160",
name:"calc_estado",
size:"114,20",
typeid:4,
uuid:"FFF2EDC5-0B1E-4652-AADF-312D84B747C1",
valuelistID:"D371DA30-4972-4D74-8D6D-E4B9F1EE7586"
}
],
name:"sm_frm_consultorios",
onShowMethodID:"331E7957-6E03-47A5-B6BA-E940CAB12980",
showInMenu:true,
size:"1756,480",
styleClass:"table",
styleName:"id_style",
typeid:3,
uuid:"23781537-60DF-467C-8330-FF24BD1240FC",
view:3