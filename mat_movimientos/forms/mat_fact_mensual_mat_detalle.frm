dataSource:"db:/sistemas/mat_fact_mensual",
items:[
{
formIndex:7,
labelFor:"",
location:"5,97",
size:"80,20",
styleClass:"label_black",
text:"Obra Social:",
typeid:7,
uuid:"01EC4D16-0929-4D71-AF3C-065F80708827"
},
{
dataProviderID:"fact_anio",
displayType:2,
editable:false,
formIndex:14,
format:"dd-MM-yyyy",
location:"303,119",
name:"fact_anio",
size:"83,20",
typeid:4,
uuid:"07072EB0-0605-4BF1-8D71-714D2E12F182",
valuelistID:"97C211F8-7C9E-41D2-8890-E4EDB38B2F2A"
},
{
anchors:11,
formIndex:21,
items:[
{
containsFormID:"925A6377-6C81-4646-9D13-B3CCC461FC9C",
location:"12,262",
relationName:"mat_fact_mensual_to_mat_fact_mensual_detalle",
text:"mat_fact_mensual_mat_detalle_movi",
typeid:15,
uuid:"3C4F0500-4577-49B2-8BF8-64C66C7F8374"
}
],
location:"0,230",
name:"tabs",
printable:false,
size:"1022,350",
transparent:true,
typeid:16,
uuid:"0B444300-42E4-43B3-9485-67EDC42163DC"
},
{
formIndex:2,
imageMediaID:"492E6F14-8334-48EB-8565-73505985E0B1",
location:"305,31",
mediaOptions:1,
mnemonic:"",
name:"btn_borrar",
onActionMethodID:"F63F2666-C4C7-4655-8FAB-884BB27B7E34",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Borrar",
toolTipText:"Borrar",
typeid:7,
uuid:"0D98AAE9-DDCE-4ECA-A2B0-80B1AAA624F1"
},
{
formIndex:17,
labelFor:"",
location:"391,97",
size:"105,20",
styleClass:"label_black",
text:"Importe Total:",
typeid:7,
uuid:"369F201E-E063-45AE-B02D-936EE5123EC7"
},
{
formIndex:5,
labelFor:"",
location:"5,75",
size:"80,20",
styleClass:"label_black",
text:"ID:",
typeid:7,
uuid:"479F4F7B-4F17-4861-91B4-D38FCFE8418E"
},
{
formIndex:2,
location:"440,31",
mediaOptions:1,
name:"btn_cerrar",
onActionMethodID:"72DD7167-BF15-4B71-B539-E92CEEE2BC99",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"157,30",
toolTipText:"Cerrar Facturacion",
typeid:7,
uuid:"48E9425D-6105-4176-8653-40FC9CA10B5F"
},
{
dataProviderID:"obsoc_id",
displayType:10,
formIndex:8,
location:"90,97",
name:"obsoc_id",
size:"296,20",
typeid:4,
uuid:"50B5A745-EE08-4CAA-BDC0-7E4F672F8094",
valuelistID:"D47ED00E-BB80-486E-9EA7-E825E6393F73"
},
{
height:580,
partType:5,
typeid:19,
uuid:"5E95A5B8-2265-4E06-AFA8-E24361BF3422"
},
{
dataProviderID:"fact_mes",
displayType:2,
editable:false,
formIndex:14,
format:"dd-MM-yyyy",
location:"90,119",
name:"fact_mes",
size:"136,20",
typeid:4,
uuid:"72A5815C-35B4-4439-AE48-48DC38BC1B64",
valuelistID:"D30961D6-B67C-49E0-87BD-6E7EEBD46F2A"
},
{
dataProviderID:"fact_estado",
editable:false,
formIndex:25,
location:"501,119",
name:"fact_estado",
size:"101,20",
styleClass:"disable",
typeid:4,
uuid:"8052F498-3445-45CA-B65A-7EE484630B73",
valuelistID:"578A7F69-9251-45EA-9ECB-7A01B87B67A1"
},
{
dataProviderID:"mat_fact_mensual_to_mat_fact_mensual_detalle.aggr_imp_total",
editable:false,
formIndex:18,
format:"#,###.00",
horizontalAlignment:4,
location:"501,97",
size:"101,20",
styleClass:"disable",
typeid:4,
uuid:"822C71A2-943F-4CB5-B53A-0806B7D7EEBB"
},
{
formIndex:1,
imageMediaID:"B59F00BB-DE87-490B-92E9-55F93601EEA5",
location:"35,31",
mediaOptions:1,
name:"btn_volver",
onActionMethodID:"304BE2FF-192B-4B64-BFFB-687B9AE5E3C1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Volver",
toolTipText:"Volver",
typeid:7,
uuid:"85DA4490-6130-40E5-A7AA-4592326CE38E"
},
{
dataProviderID:"fact_observa",
displayType:1,
formIndex:14,
horizontalAlignment:0,
location:"5,162",
name:"fact_observa",
scrollbars:32,
size:"491,63",
typeid:4,
uuid:"87DB99C5-4976-46F9-8BEA-4C0F9DF5782A"
},
{
formIndex:13,
labelFor:"",
location:"5,119",
size:"80,20",
styleClass:"label_black",
text:"Mes:",
typeid:7,
uuid:"9287D33F-BA6F-4D45-913F-F3317E67D9A9"
},
{
formIndex:9,
labelFor:"",
location:"391,75",
size:"105,20",
styleClass:"label_black",
text:"Cant. Facturas:",
typeid:7,
uuid:"A61AE3FB-2A9B-456A-93CB-9DDDAB9FB991"
},
{
formIndex:13,
labelFor:"",
location:"251,119",
size:"46,20",
styleClass:"label_black",
text:"Año:",
typeid:7,
uuid:"B3984A44-1D33-4AAA-98A2-D68C36B1546F"
},
{
dataProviderID:"mat_fact_mensual_to_mat_fact_mensual_detalle.aggr_cant_reg",
editable:false,
formIndex:10,
horizontalAlignment:0,
location:"501,75",
size:"101,20",
styleClass:"disable",
typeid:4,
uuid:"C59F7715-0C7E-4D64-8209-9C564A14C39C"
},
{
formIndex:13,
horizontalAlignment:0,
labelFor:"",
location:"5,141",
size:"491,20",
styleClass:"label_black",
text:"Observaciones",
typeid:7,
uuid:"DD66341E-4D15-4581-A885-AC6BE1982A96"
},
{
anchors:11,
location:"0,0",
size:"1022,70",
styleClass:"banner",
text:"Detalle Facturación Mensual de Matriculados por Obra Social",
transparent:true,
typeid:7,
uuid:"E1BF1F49-EBD1-49DE-B29B-92ED3E11A3C2"
},
{
dataProviderID:"fact_id",
editable:false,
formIndex:6,
horizontalAlignment:0,
location:"90,75",
size:"85,20",
styleClass:"disable",
typeid:4,
uuid:"E54BA97F-CB05-46FF-8CB1-4E018155361E"
},
{
formIndex:17,
labelFor:"",
location:"391,119",
size:"105,20",
styleClass:"label_black",
text:"Estado:",
typeid:7,
uuid:"E70BEBF5-304F-48F1-9600-593F552C8B93"
},
{
formIndex:2,
imageMediaID:"5C432BE9-5CB5-48FB-A4BE-25A25C33D471",
location:"170,31",
mediaOptions:1,
name:"btn_grabar",
onActionMethodID:"6276ACD9-3D48-4155-8E4B-611E41634EA0",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Grabar",
toolTipText:"Grabar",
typeid:7,
uuid:"EBCE3112-A5F8-4C0B-8D1D-8884A2B2DA84"
}
],
name:"mat_fact_mensual_mat_detalle",
navigatorID:"-1",
onShowMethodID:"FF402A29-2F6E-4BCE-AFE1-4F7F6BD8D69D",
showInMenu:true,
size:"1022,487",
styleClass:"formulario",
styleName:"id_style",
typeid:3,
uuid:"3D1B7D95-7C70-4394-B5E0-E95D79253038"