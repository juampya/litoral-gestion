dataSource:"db:/sistemas/turno",
items:[
{
anchors:11,
dataProviderID:"turno_dia_estado",
displayType:2,
editable:false,
location:"144,189",
name:"agenda_estado",
onRenderMethodID:"5705E033-5733-4BEC-8357-83C231A25677",
size:"128,20",
text:"Agenda Estado",
typeid:4,
uuid:"14591B53-9A29-4C7C-A3F8-AEE0F2EDF338",
valuelistID:"CE4CBDBF-41E4-44E8-9171-C4CABE1592A3"
},
{
formIndex:9,
imageMediaID:"7C09EF16-5AD7-4BBB-9F6B-30FD1DED8EA4",
location:"0,188",
name:"btn_confirmar",
onActionMethodID:"ABE75342-70AC-4A20-B6FE-C27FBE69A7BF",
onRenderMethodID:"C4AD4887-A5CB-48A9-9C83-173D3F687D46",
showClick:false,
size:"22,19",
toolTipText:"Confirmar Turno",
typeid:7,
uuid:"1AF6F162-B84E-4C31-A463-A09BB3AEE54E"
},
{
background:"#ffff8a",
dataProviderID:"ag_cant_reg",
editable:false,
formIndex:12,
horizontalAlignment:4,
location:"67,108",
name:"ag_cant_reg",
size:"55,20",
text:"Ag Cant Reg",
typeid:4,
uuid:"20F36FC9-AF4D-4CE7-B743-7E39815C80A6"
},
{
height:262,
partType:5,
typeid:19,
uuid:"296DDCF2-77ED-460F-91F3-42A3D6B05C5A"
},
{
anchors:11,
horizontalAlignment:0,
labelFor:"turno_paciente_nro_docu",
location:"271,169",
name:"turno_paciente_nro_docu_label",
size:"140,20",
styleClass:"label_black",
text:"Nro. Documento",
typeid:7,
uuid:"40D968FF-7BAA-42F2-B65C-8D5970B938DC"
},
{
formIndex:7,
location:"1,5",
size:"36,20",
styleClass:"label_black",
typeid:7,
uuid:"442A59F8-EC59-4905-AD9E-044ED8012EBD"
},
{
anchors:11,
horizontalAlignment:0,
labelFor:"agenda_estado",
location:"144,169",
name:"agenda_estado_label",
size:"128,20",
styleClass:"label_black",
text:"Estado",
typeid:7,
uuid:"4837ABC3-C218-4CA0-9A48-C97F805C715A"
},
{
anchors:11,
horizontalAlignment:0,
labelFor:"agenda_hora",
location:"56,169",
name:"agenda_hora_label",
size:"88,20",
styleClass:"label_black",
text:"Hora",
typeid:7,
uuid:"4837F75E-1B31-4D59-A69F-6810D507EE40"
},
{
anchors:11,
fontType:"Verdana,1,12",
formIndex:6,
horizontalAlignment:2,
location:"37,27",
name:"lbl_medico",
size:"1062,20",
styleClass:"label_black",
typeid:7,
uuid:"4A0E7519-4639-4F30-B2BC-F22D4A89C786"
},
{
anchors:11,
horizontalAlignment:0,
labelFor:"turno_paciente_tel",
location:"881,168",
name:"turno_paciente_tel_label",
size:"123,20",
styleClass:"label_black",
text:" Tel.",
typeid:7,
uuid:"50AADBA9-638F-4534-B8C6-C1AEDACC7C09"
},
{
anchors:11,
dataProviderID:"turno_hora",
editable:false,
format:"HH:mm",
horizontalAlignment:0,
location:"56,189",
name:"agenda_hora",
onRenderMethodID:"503BF4C4-D742-4DEF-AF23-89104F8F26F7",
size:"88,20",
text:"Agenda Hora",
typeid:4,
uuid:"69A078B2-F354-45A9-903E-94CA6BF2E678"
},
{
anchors:11,
dataProviderID:"turno_paciente_nombre",
location:"417,187",
name:"turno_paciente_nombre",
size:"204,20",
text:"Turno Paciente Nombre",
typeid:4,
uuid:"6DCFCB39-DED9-433C-8F96-9BA719279C4B"
},
{
height:138,
partType:1,
typeid:19,
uuid:"7D85A56F-2CA9-4ACA-A821-4D944583BC5E"
},
{
anchors:11,
dataProviderID:"turno_paciente_nro_docu",
horizontalAlignment:4,
location:"271,189",
name:"turno_paciente_nro_docu",
onDataChangeMethodID:"C2514586-4728-4C4B-A027-8C8437D26618",
size:"140,20",
text:"Turno Paciente Nro Docu",
typeid:4,
uuid:"AF77F3FF-B8FF-4073-B2CB-BB44B77FC5A1"
},
{
formIndex:10,
imageMediaID:"2F4B8675-7C24-48FA-A335-2815390B855B",
location:"32,188",
name:"btn_completar",
onActionMethodID:"EB076DC5-1A28-4451-93DC-DC25CA93DF18",
onRenderMethodID:"F356CCA4-2A2D-4DD0-BD35-2638758AB5E8",
showClick:false,
size:"22,19",
toolTipText:"Completar Datos del Paciente",
typeid:7,
uuid:"B3FEDB3A-95F3-46CE-9F69-54F8C7C3D782"
},
{
anchors:11,
location:"0,0",
name:"banner",
size:"1099,100",
styleClass:"banner",
transparent:true,
typeid:7,
uuid:"B799ADD0-ACEE-4FB5-BCA0-C8DB9AFCE734"
},
{
anchors:11,
horizontalAlignment:0,
labelFor:"turno_paciente_obra_social",
location:"622,168",
name:"turno_paciente_obra_social_label",
size:"254,20",
styleClass:"label_black",
text:"Obra Social",
typeid:7,
uuid:"BC2BA3C1-57BD-4AFA-BCD4-BEB9F4FCB8FA"
},
{
formIndex:11,
horizontalAlignment:4,
labelFor:"ag_cant_reg",
location:"5,108",
name:"ag_cant_reg_label",
size:"61,20",
styleClass:"label_black",
text:"#Turnos:",
typeid:7,
uuid:"C18B250E-42F4-47CB-A299-AC3BA8D7034F"
},
{
anchors:11,
horizontalAlignment:0,
labelFor:"turno_paciente_nombre",
location:"417,168",
name:"turno_paciente_nombre_label",
size:"204,20",
styleClass:"label_black",
text:"Nombre",
typeid:7,
uuid:"C1A3763A-DD68-481D-A329-906CBB4829DF"
},
{
anchors:11,
dataProviderID:"turno_paciente_tel",
horizontalAlignment:4,
location:"881,188",
name:"turno_paciente_tel",
size:"123,20",
text:"Turno Paciente Tel",
typeid:4,
uuid:"CC500341-8AED-44B5-974C-6E7B1632FCB1"
},
{
formIndex:4,
location:"37,59",
onActionMethodID:"EA9C1A05-820B-4CD9-9567-37E8A56554F7",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"112,27",
text:"Volver",
typeid:7,
uuid:"DCDF803F-4EC4-48EF-83C4-A0EF3F337122"
},
{
formIndex:7,
location:"1,27",
size:"36,20",
styleClass:"label_black",
typeid:7,
uuid:"DE89D9BE-11C4-431F-9E9F-0865115F00FA"
},
{
anchors:11,
dataProviderID:"turno_paciente_obra_social",
displayType:2,
editable:false,
location:"622,189",
name:"turno_paciente_obra_social",
onRenderMethodID:"02C86B4F-9D3E-43A5-87C5-AE0F2667B55E",
size:"254,20",
text:"Turno Paciente Obra Social",
typeid:4,
uuid:"EA7D58C7-673B-43A0-9E02-9539B1156B88",
valuelistID:"67E1D3AB-AC58-4ADE-9E16-82830F181512"
},
{
anchors:11,
fontType:"Verdana,1,12",
formIndex:5,
horizontalAlignment:2,
location:"37,5",
name:"lbl_fecha",
size:"1062,20",
styleClass:"label_black",
typeid:7,
uuid:"EC5EF17E-A45C-42B4-8878-D4A453AB105B"
}
],
name:"cli_turnos_lst_x_dia",
onShowMethodID:"05F9F947-223D-4AB3-995E-D42E2B5139C2",
showInMenu:true,
size:"1099,237",
styleClass:"table",
styleName:"id_style",
typeid:3,
uuid:"679D3DEB-83C7-4DC6-8F71-8A2A71ABCB4B",
view:3