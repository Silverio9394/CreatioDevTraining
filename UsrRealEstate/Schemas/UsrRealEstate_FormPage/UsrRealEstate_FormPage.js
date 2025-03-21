define("UsrRealEstate_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealEstate"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "21684171-877d-4347-b4a4-f4feb63ac739",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "HelloButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(HelloButton_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "copilot-rewrite-friendly-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_v7a1aiv",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_v7a1aiv",
					"readonly": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_cec6c5w",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_cec6c5w",
					"readonly": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_32zvhy0",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_32zvhy0",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Commission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommission_8huh9gd",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommission_8huh9gd",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_tucidel",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_tucidel",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_hwxs19i",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_hwxs19i",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Comments",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComments_xv2wsxq",
					"labelPosition": "auto",
					"control": "$PDS_UsrComments_xv2wsxq",
					"multiline": false,
					"readonly": false,
					"visible": false,
					"placeholder": "",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrColumn8_6n6w47p",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn8_6n6w47p",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_9imaqo3",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_9imaqo3",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_jwb6bav",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_jwb6bav",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "CommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionPercent_u7rcaf2",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent_u7rcaf2",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_v7a1aiv": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},						
						"validators": {
							"UsrPriceValidator": {								
								"type": "usr.DGValidator",								
								"params": {									
									"minValue": 0,									
									"message": "#ResourceString(PriceCannotBeLess)#"								
								}							
							}						
						}
					},
					"PDS_UsrArea_cec6c5w": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},						
						"validators": {							
							"UsrAreaValidator": {								
								"type": "usr.DGValidator",								
								"params": {									
									"minValue": 10,									
									"message": "#ResourceString(AreaCannotBeLess)#"								
								}							
							}						
						}
					},
					"PDS_UsrNumber_32zvhy0": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrType_tucidel": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_hwxs19i": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComments_xv2wsxq": {
						"modelConfig": {
							"path": "PDS.UsrComments"
						}
					},
					"PDS_UsrColumn8_6n6w47p": {
						"modelConfig": {
							"path": "PDS.UsrColumn8"
						}
					},
					"PDS_UsrCountry_9imaqo3": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_jwb6bav": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrCommission_8huh9gd": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent_u7rcaf2": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent_u7rcaf2"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealEstate",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent_u7rcaf2": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.PushButtonRequest",
				
				/* Implementation of the custom query handler. */
				
				handler: async (request, next) => {
					
					console.log("Button works...");
					
					console.log("request:" , request);
					
					Terrasoft.showInformation("My button was pressed.");
					//get value
					var price = await request.$context.PDS_UsrPrice_v7a1aiv;
					
					console.log("Price = " + price);
					//set value
					request.$context.PDS_UsrArea_cec6c5w = 999;
					
					/* Call the next handler if it exists and return its result. */
					
					return next?.handle(request);
				
				}
			},
			{				
				request: "crt.HandleViewModelAttributeChangeRequest",
			    /* The custom implementation of the system query handler. */				
			    handler: async (request, next) => {      					
				    if(request.attributeName === 'PDS_UsrPrice_v7a1aiv' || 				                 // if price changed
					    request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent_u7rcaf2')        // or percent changed
					{ 								
				       var price = await request.$context.PDS_UsrPrice_v7a1aiv;						
					   var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent_u7rcaf2;						
					   var commission = price * percent / 100;						
					   request.$context.PDS_UsrCommission_8huh9gd = commission;					
				    }					
				    /* Call the next handler if it exists and return its result. */					
				    return next?.handle(request);				
			    }			
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.			
			Format the validator type in PascalCase. */			
			"usr.DGValidator": {				
				validator: function (config) {					
					return function (control) {						
						let value = control.value;						
						let minValue = config.minValue;						
						let valueIsCorrect = value >= minValue;						
						var result;						
						if (valueIsCorrect) {							
							result = null;						
						} else {							
							result = {								
								"usr.DGValidator": { 									
									message: config.message								
								}							
							};						
						}						
						return result;					
					};				
				},				
				params: [					
					{						
						name: "minValue"					
					},					
					{						
						name: "message"					
					}				
				],				
				async: false			
			}
		}/**SCHEMA_VALIDATORS*/
	};
});