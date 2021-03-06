dataSource:"db:/sistemas/turno",
initialSort:"turno_hora asc",
items:[
{
anchors:11,
dataProviderID:"turno_dia_estado",
displayType:2,
editable:false,
location:"51,56",
name:"agenda_estado",
onDataChangeMethodID:"AEFC3A76-595C-4099-8A8E-0B766075BF18",
onRenderMethodID:"CD7DCFBC-55E5-4C81-B3FA-8167095207F3",
onRightClickMethodID:"D2A75A63-EB5F-430D-BC3E-3EF3166FB15B",
size:"90,20",
text:"Agenda Estado",
typeid:4,
uuid:"02C198F3-51EC-41D4-8853-14D59C745260",
valuelistID:"CE4CBDBF-41E4-44E8-9171-C4CABE1592A3"
},
{
background:"#ff0000",
dataProviderID:"vl_sobreturnos",
editable:false,
formIndex:20,
horizontalAlignment:4,
location:"776,5",
size:"55,20",
typeid:4,
uuid:"21F1DE39-7321-4723-9FCC-771F3D1400F8"
},
{
formIndex:13,
horizontalAlignment:4,
labelFor:"calc_turnos_libre",
location:"122,5",
name:"calc_turnos_libre_label",
size:"80,20",
styleClass:"label_black",
text:"Libres:",
typeid:7,
uuid:"2437D8D2-AE77-4D3F-AFDD-E860C856616A"
},
{
background:"#ff8040",
dataProviderID:"vl_turnos_confirmados",
editable:false,
formIndex:18,
horizontalAlignment:4,
location:"490,5",
name:"calc_turnos_confirmados",
size:"55,20",
typeid:4,
uuid:"2F072883-9D73-48F6-988E-E796777FFB9D"
},
{
dataProviderID:"turno_paciente_tel",
formIndex:22,
location:"653,56",
name:"turno_paciente_tel",
onRenderMethodID:"CD7DCFBC-55E5-4C81-B3FA-8167095207F3",
size:"118,20",
typeid:4,
uuid:"3025A5F1-EBA5-4E1A-BFC5-46EF6BD340A5"
},
{
dataProviderID:"turno_estado",
displayType:2,
editable:false,
formIndex:22,
location:"855,55",
name:"turno_estado",
onDataChangeMethodID:"3F245900-F978-419C-AB93-54B69EEBC3C1",
onRenderMethodID:"CD7DCFBC-55E5-4C81-B3FA-8167095207F3",
size:"115,20",
typeid:4,
uuid:"332A3B98-478A-44B4-AFE8-6557D1E4CE23",
valuelistID:"92539733-4421-40BA-8176-336CB261E2D1"
},
{
anchors:11,
horizontalAlignment:0,
labelFor:"agenda_hora",
location:"0,36",
name:"agenda_hora_label",
size:"51,20",
styleClass:"label_black",
text:"Hora",
typeid:7,
uuid:"3872322F-93CC-4266-A9D7-33E0DAD61038"
},
{
anchors:11,
dataProviderID:"turno_paciente_nro_docu",
horizontalAlignment:4,
location:"141,56",
name:"turno_paciente_nro_docu",
onDataChangeMethodID:"77BF29F2-5C62-4507-A4AD-B5521EA157DF",
onRenderMethodID:"CD7DCFBC-55E5-4C81-B3FA-8167095207F3",
onRightClickMethodID:"D2A75A63-EB5F-430D-BC3E-3EF3166FB15B",
size:"83,20",
text:"Turno Paciente Nro Docu",
typeid:4,
uuid:"39FCEC85-D1C0-4632-85A3-5DF09310281E"
},
{
formIndex:21,
horizontalAlignment:0,
labelFor:"turno_paciente_tel",
location:"653,36",
name:"turno_paciente_tel_label",
size:"118,20",
styleClass:"label_black",
text:"Telefono",
typeid:7,
uuid:"3AC7E38B-CDF9-4391-8DE9-53CE9454F6C3"
},
{
anchors:11,
horizontalAlignment:0,
labelFor:"turno_paciente_nro_docu",
location:"141,36",
name:"turno_paciente_nro_docu_label",
size:"83,20",
styleClass:"label_black",
text:"Documento",
typeid:7,
uuid:"3BE6B4BD-9FF8-429A-96EB-3DC13C79DC50"
},
{
formIndex:19,
horizontalAlignment:4,
labelFor:"calc_turnos_noAtiende",
location:"693,5",
size:"80,20",
styleClass:"label_black",
text:"Sobreturnos:",
typeid:7,
uuid:"3EA41E5C-A1D4-457A-AD90-3E4DD9A7960B"
},
{
anchors:11,
dataProviderID:"turno_hora",
editable:false,
format:"HH:mm|mask",
horizontalAlignment:0,
location:"0,56",
name:"agenda_hora",
onRenderMethodID:"CD7DCFBC-55E5-4C81-B3FA-8167095207F3",
onRightClickMethodID:"D2A75A63-EB5F-430D-BC3E-3EF3166FB15B",
size:"51,20",
text:"Agenda Hora",
typeid:4,
uuid:"3FFD464C-631A-4B8D-924C-3A22A63B13D8"
},
{
anchors:11,
horizontalAlignment:0,
labelFor:"agenda_estado",
location:"51,36",
name:"agenda_estado_label",
size:"90,20",
styleClass:"label_black",
text:"Estado",
typeid:7,
uuid:"47F42859-71EF-49E7-BE1D-5BF77A86FCA9"
},
{
background:"#80ff80",
dataProviderID:"vl_turnos_libre",
editable:false,
formIndex:14,
horizontalAlignment:4,
location:"204,5",
name:"calc_turnos_libre",
size:"55,20",
text:"Calc Turnos Libre",
typeid:4,
uuid:"58B696B3-B747-4E40-A33E-99E471AC1BFB"
},
{
anchors:11,
dataProviderID:"turno_paciente_obra_social",
displayType:10,
location:"435,56",
name:"turno_paciente_obra_social",
onRenderMethodID:"CD7DCFBC-55E5-4C81-B3FA-8167095207F3",
onRightClickMethodID:"D2A75A63-EB5F-430D-BC3E-3EF3166FB15B",
size:"219,20",
text:"Turno Paciente Obra Social",
typeid:4,
uuid:"5A007D9E-0C5F-4BC4-A6F7-2281FF1DA16F",
valuelistID:"67E1D3AB-AC58-4ADE-9E16-82830F181512"
},
{
formIndex:15,
horizontalAlignment:4,
labelFor:"calc_turnos_ocupados",
location:"264,5",
name:"calc_turnos_ocupados_label",
size:"80,20",
styleClass:"label_black",
text:"Ocupados:",
typeid:7,
uuid:"5D49D6F6-93A3-4FB5-B1DD-08868A511F13"
},
{
formIndex:23,
horizontalAlignment:0,
labelFor:"paciente_nro_ficha",
location:"773,36",
name:"paciente_nro_ficha_label",
size:"81,20",
styleClass:"label_black",
text:"N° Ficha",
typeid:7,
uuid:"70AC7BBB-94E9-48A7-951C-8A371C537A24"
},
{
dataProviderID:"turno_to_paciente.paciente_nro_ficha",
editable:false,
formIndex:24,
horizontalAlignment:0,
location:"773,56",
name:"paciente_nro_ficha",
onRenderMethodID:"CD7DCFBC-55E5-4C81-B3FA-8167095207F3",
size:"81,20",
typeid:4,
uuid:"721072B1-489F-4136-A9C3-F377E0942F22"
},
{
background:"#ffff80",
dataProviderID:"vl_turnos_ocupados",
editable:false,
formIndex:16,
horizontalAlignment:4,
location:"347,5",
name:"calc_turnos_ocupados",
size:"55,20",
typeid:4,
uuid:"72EF1FEE-6203-4B8E-BCF0-F179C22FE8D9"
},
{
formIndex:21,
horizontalAlignment:0,
labelFor:"turno_estado",
location:"855,35",
name:"turno_estado_label",
size:"115,20",
styleClass:"label_black",
text:"Turno Estado",
typeid:7,
uuid:"7E8C59D2-6E30-457B-81A2-BD1EFC7DE9B6"
},
{
background:"#ffff8a",
dataProviderID:"ag_cant_reg",
editable:false,
formIndex:12,
horizontalAlignment:4,
location:"62,5",
name:"ag_cant_reg",
size:"55,20",
text:"Ag Cant Reg",
typeid:4,
uuid:"8DCB0CDB-ED3E-4C94-8150-5A542A65AFA4"
},
{
height:33,
partType:1,
typeid:19,
uuid:"A3AF3FA2-F63C-4A34-8DB0-F764072C2A1D"
},
{
anchors:11,
horizontalAlignment:0,
labelFor:"turno_paciente_obra_social",
location:"435,36",
name:"turno_paciente_obra_social_label",
size:"219,20",
styleClass:"label_black",
text:"Obra Social",
typeid:7,
uuid:"AAFADB38-0C04-44F1-A786-C226CF8AA3F9"
},
{
formIndex:19,
horizontalAlignment:4,
labelFor:"calc_turnos_noAtiende",
location:"550,5",
name:"calc_turnos_noAtiende_label",
size:"80,20",
styleClass:"label_black",
text:"No Atiende:",
typeid:7,
uuid:"B6313B50-7498-4963-8F30-67556EFFB560"
},
{
height:262,
partType:5,
typeid:19,
uuid:"B6EBFDF7-E675-41E0-A40E-B650971B6430"
},
{
formIndex:17,
horizontalAlignment:4,
labelFor:"calc_turnos_confirmados",
location:"407,5",
name:"calc_turnos_confirmados_label",
size:"80,20",
styleClass:"label_black",
text:"Confirmados:",
typeid:7,
uuid:"BA2BC13F-A640-43AF-BA12-AEF833CF1A3E"
},
{
formIndex:25,
imageMediaID:"914FDFA0-7C3E-4468-8671-B96FACB2917B",
location:"0,55",
mediaOptions:1,
onActionMethodID:"61913DC0-F0F3-4C8E-BEED-CC336893771B",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"20,20",
toolTipText:"Detalle del turno",
transparent:true,
typeid:7,
uuid:"C8A0E03C-B166-4CD7-9113-D4965E6F8E74"
},
{
background:"#ff8080",
dataProviderID:"vl_turnos_no_atiende",
editable:false,
formIndex:20,
horizontalAlignment:4,
location:"633,5",
name:"calc_turnos_noAtiende",
size:"55,20",
typeid:4,
uuid:"E6739441-FE47-4795-B655-C063C2E9E94C"
},
{
anchors:11,
horizontalAlignment:0,
labelFor:"turno_paciente_nombre",
location:"224,36",
name:"turno_paciente_nombre_label",
size:"211,20",
styleClass:"label_black",
text:"Nombre",
typeid:7,
uuid:"F12A5E65-ADA0-4F22-B552-F0C998DA435C"
},
{
anchors:11,
dataProviderID:"turno_paciente_nombre",
location:"224,56",
name:"turno_paciente_nombre",
onRenderMethodID:"CD7DCFBC-55E5-4C81-B3FA-8167095207F3",
onRightClickMethodID:"D2A75A63-EB5F-430D-BC3E-3EF3166FB15B",
size:"211,20",
text:"Turno Paciente Nombre",
typeid:4,
uuid:"F83E8FBB-76F4-46E9-8765-34004F6F1A13"
},
{
formIndex:11,
horizontalAlignment:4,
labelFor:"ag_cant_reg",
location:"0,5",
name:"ag_cant_reg_label",
size:"61,20",
styleClass:"label_black",
text:"#Turnos:",
typeid:7,
uuid:"FFCB3685-5930-48BA-8DE6-CADA402DE095"
}
],
name:"cli_turnos_calendario_horas",
namedFoundSet:"separate",
onRecordSelectionMethodID:"D84214AE-626E-4492-B288-B28B4CFCCA48",
onShowMethodID:"73573560-1F62-45B6-8E3E-511C07733B25",
showInMenu:true,
size:"977,262",
styleClass:"table",
styleName:"id_style",
typeid:3,
uuid:"14FFC21E-F16C-4F59-A8DA-0C74CCAED07C",
view:3