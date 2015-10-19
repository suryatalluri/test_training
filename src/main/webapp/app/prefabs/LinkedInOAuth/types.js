wm.types = {
	"types": {
		"boolean": {
			"primitiveType": "Boolean",
			"internal": true
		},
		"byte": {
			"primitiveType": "Number",
			"internal": true
		},
		"char": {
			"primitiveType": "String",
			"internal": true
		},
		"double": {
			"primitiveType": "Number",
			"internal": true
		},
		"float": {
			"primitiveType": "Number",
			"internal": true
		},
		"int": {
			"primitiveType": "Number",
			"internal": true
		},
		"java.lang.Boolean": {
			"primitiveType": "Boolean",
			"internal": false
		},
		"java.lang.Byte": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Character": {
			"primitiveType": "String",
			"internal": false
		},
		"java.lang.Double": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Float": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Integer": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Long": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Short": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.String": {
			"primitiveType": "String",
			"internal": false
		},
		"java.lang.StringBuffer": {
			"primitiveType": "String",
			"internal": false
		},
		"java.math.BigDecimal": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.math.BigInteger": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.sql.Date": {
			"primitiveType": "Date",
			"internal": false
		},
		"java.sql.Time": {
			"primitiveType": "Date",
			"internal": false
		},
		"java.sql.Timestamp": {
			"primitiveType": "Date",
			"internal": false
		},
		"java.util.Date": {
			"primitiveType": "Date",
			"internal": false
		},
		"javax.servlet.http.HttpServletRequest": {
			"service": "OAuthHandlerService",
			"liveService": false,
			"internal": false,
			"fields": {
				"attributeNames": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Enumeration",
					"required": true,
					"fieldOrder": 19,
					"noChange": [],
					"include": []
				},
				"authType": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"characterEncoding": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 20,
					"noChange": [],
					"include": []
				},
				"contentLength": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "int",
					"required": true,
					"fieldOrder": 21,
					"noChange": [],
					"include": []
				},
				"contentType": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 22,
					"noChange": [],
					"include": []
				},
				"contextPath": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"cookies": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "javax.servlet.http.Cookie",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"headerNames": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Enumeration",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"inputStream": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "javax.servlet.ServletInputStream",
					"required": true,
					"fieldOrder": 23,
					"noChange": [],
					"include": []
				},
				"localAddr": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 24,
					"noChange": [],
					"include": []
				},
				"localName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 25,
					"noChange": [],
					"include": []
				},
				"localPort": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "int",
					"required": true,
					"fieldOrder": 26,
					"noChange": [],
					"include": []
				},
				"locale": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Locale",
					"required": true,
					"fieldOrder": 27,
					"noChange": [],
					"include": []
				},
				"locales": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Enumeration",
					"required": true,
					"fieldOrder": 28,
					"noChange": [],
					"include": []
				},
				"method": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"parameterMap": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Map",
					"required": true,
					"fieldOrder": 29,
					"noChange": [],
					"include": []
				},
				"parameterNames": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Enumeration",
					"required": true,
					"fieldOrder": 30,
					"noChange": [],
					"include": []
				},
				"pathInfo": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"pathTranslated": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"protocol": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 31,
					"noChange": [],
					"include": []
				},
				"queryString": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"reader": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.io.BufferedReader",
					"required": true,
					"fieldOrder": 32,
					"noChange": [],
					"include": []
				},
				"remoteAddr": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 33,
					"noChange": [],
					"include": []
				},
				"remoteHost": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 34,
					"noChange": [],
					"include": []
				},
				"remotePort": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "int",
					"required": true,
					"fieldOrder": 35,
					"noChange": [],
					"include": []
				},
				"remoteUser": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"requestURI": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				},
				"requestURL": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.StringBuffer",
					"required": true,
					"fieldOrder": 10,
					"noChange": [],
					"include": []
				},
				"requestedSessionId": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 11,
					"noChange": [],
					"include": []
				},
				"requestedSessionIdFromCookie": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "boolean",
					"required": true,
					"fieldOrder": 15,
					"noChange": [],
					"include": []
				},
				"requestedSessionIdFromURL": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "boolean",
					"required": true,
					"fieldOrder": 16,
					"noChange": [],
					"include": []
				},
				"requestedSessionIdFromUrl": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "boolean",
					"required": true,
					"fieldOrder": 17,
					"noChange": [],
					"include": []
				},
				"requestedSessionIdValid": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "boolean",
					"required": true,
					"fieldOrder": 18,
					"noChange": [],
					"include": []
				},
				"scheme": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 36,
					"noChange": [],
					"include": []
				},
				"secure": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "boolean",
					"required": true,
					"fieldOrder": 39,
					"noChange": [],
					"include": []
				},
				"serverName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 37,
					"noChange": [],
					"include": []
				},
				"serverPort": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "int",
					"required": true,
					"fieldOrder": 38,
					"noChange": [],
					"include": []
				},
				"servletPath": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 12,
					"noChange": [],
					"include": []
				},
				"session": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "javax.servlet.http.HttpSession",
					"required": true,
					"fieldOrder": 13,
					"noChange": [],
					"include": []
				},
				"userPrincipal": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.security.Principal",
					"required": true,
					"fieldOrder": 14,
					"noChange": [],
					"include": []
				}
			}
		},
		"javax.servlet.http.HttpServletResponse": {
			"service": "OAuthHandlerService",
			"liveService": false,
			"internal": false,
			"fields": {
				"bufferSize": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "int",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"characterEncoding": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"committed": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "boolean",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"contentType": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"locale": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.util.Locale",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"outputStream": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "javax.servlet.ServletOutputStream",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"writer": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.io.PrintWriter",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				}
			}
		},
		"long": {
			"primitiveType": "Number",
			"internal": true
		},
		"short": {
			"primitiveType": "Number",
			"internal": true
		}
	}
};