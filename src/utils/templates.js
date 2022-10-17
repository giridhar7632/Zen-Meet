const emailTemplate = ({ title, subject, body, link, btn, footer }) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
	xmlns="http://www.w3.org/1999/xhtml"
	xmlns:v="urn:schemas-microsoft-com:vml"
	xmlns:o="urn:schemas-microsoft-com:office:office"
>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<!--[if !mso]><!-->
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<!--<![endif]-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="format-detection" content="telephone=no" />
		<meta name="x-apple-disable-message-reformatting" />
		<title>${title}</title>
		<style>
			@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800&display=swap');
		</style>
		<style type="text/css">
			#outlook a {
				padding: 0;
			}

			.ReadMsgBody,
			.ExternalClass {
				width: 100%;
			}

			.ExternalClass,
			.ExternalClass p,
			.ExternalClass td,
			.ExternalClass div,
			.ExternalClass span,
			.ExternalClass font {
				line-height: 100%;
			}

			div[style*='margin: 14px 0'],
			div[style*='margin: 16px 0'] {
				margin: 0 !important;
			}

			table,
			td {
				mso-table-lspace: 0;
				mso-table-rspace: 0;
			}

			table,
			tr,
			td {
				border-collapse: collapse;
			}

			body,
			td,
			th,
			p,
			div,
			li,
			a,
			span {
				-webkit-text-size-adjust: 100%;
				-ms-text-size-adjust: 100%;
				mso-line-height-rule: exactly;
			}

			img {
				border: 0;
				outline: none;
				line-height: 100%;
				text-decoration: none;
				-ms-interpolation-mode: bicubic;
			}

			a[x-apple-data-detectors] {
				color: inherit !important;
				text-decoration: none !important;
			}

			body {
				margin: 0;
				padding: 0;
				width: 100% !important;
				-webkit-font-smoothing: antialiased;
			}

			.kn-gmail-fix {
				display: none;
				display: none !important;
			}

			@media screen and (min-width: 621px) {
				.kn-email-container {
					width: 620px !important;
				}
			}
		</style>
		<style type="text/css">
			@media screen and (max-width: 620px) {
				.kn-sm-p-35-30 {
					padding: 35px 30px !important;
				}
			}
		</style>
		<style type="text/css">
			@media screen and (max-width: 525px) {
				.kn-xs-p-25-20 {
					padding: 25px 20px !important;
				}
				.kn-xs-fs-30 {
					font-size: 30px !important;
				}
				.kn-xs-m-auto {
					margin: auto !important;
				}
				.kn-xs-m-50 {
					margin: 50px !important;
				}
				.kn-xs-lh-42 {
					line-height: 42px !important;
				}
				.kn-xs-br-disabled br {
					display: none !important;
				}
			}
		</style>
		<!--[if mso]>
			<style type="text/css">
				.kn-fb-font {
					font-family: Poppins, Helvetica, Arial, sans-serif !important;
				}
			</style>
		<![endif]-->
		<!--[if gte mso 9
			]><xml
				><o:OfficeDocumentSettings
					><o:AllowPNG /><o:PixelsPerInch
						>96</o:PixelsPerInch
					></o:OfficeDocumentSettings
				></xml
			><!
		[endif]-->
	</head>
	<body
		style="
			width: 100% !important;
			margin: 0;
			padding: 0;
			mso-line-height-rule: exactly;
			-webkit-font-smoothing: antialiased;
			-webkit-text-size-adjust: 100%;
			-ms-text-size-adjust: 100%;
			background-color: #f4f4f4;
		"
		class=""
		data-new-gr-c-s-check-loaded="14.1057.0"
		data-gr-ext-installed=""
	>
		<div
			style="
				display: none !important;
				visibility: hidden;
				opacity: 0;
				overflow: hidden;
				mso-hide: all;
				height: 0;
				width: 0;
				max-height: 0;
				max-width: 0;
				font-size: 1px;
				line-height: 1px;
				color: #151515;
			"
		>
			${title}
		</div>
		<div
			style="
				display: none !important;
				visibility: hidden;
				opacity: 0;
				overflow: hidden;
				mso-hide: all;
				height: 0;
				width: 0;
				max-height: 0;
				max-width: 0;
				font-size: 1px;
				line-height: 1px;
			"
		>
			‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;
		</div>
		<table
			class="kn-email-body"
			width="100%"
			bgcolor="#f4f4f4"
			border="0"
			cellpadding="0"
			cellspacing="0"
			role="presentation"
			style="table-layout: fixed"
		>
			<tbody>
				<tr>
					<td class="kn-email-body-inner" align="center" valign="top">
						<!--[if gte mso 9]>
							<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
								<v:fill type="tile" src="" color="#f4f4f4" />
							</v:background>
						<![endif]-->
						<!--[if (gte mso 9)|(IE)]><table width="620" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"><tr><td width="620" align="center" valign="top"><![endif]-->
						<table
							class="kn-email-container"
							width="100%"
							align="center"
							border="0"
							cellpadding="0"
							cellspacing="0"
							role="presentation"
							style="margin: 0 auto; max-width: 620px"
						>
							<tbody>
								<tr>
									<td align="left" valign="top" style="padding: 0 10px">
										<table
											width="100%"
											border="0"
											cellpadding="0"
											cellspacing="0"
											role="presentation"
										>
											<tbody>
												<tr>
													<td
														height="20"
														style="font-size: 1px; line-height: 1px"
													>
														&nbsp;
													</td>
												</tr>
											</tbody>
										</table>
										<!-- BEGIN MODULE: Call to Action 2 -->
										<table
											border="0"
											cellpadding="0"
											cellspacing="0"
											width="100%"
											role="presentation"
										>
											<tbody>
												<tr>
													<td
														class="kn-sm-p-35-30 kn-xs-p-25-20"
														style="
															padding: 40px;
															background-color: #ffffff;
															border-radius: 8px;
														"
														valign="top"
														bgcolor="#ffffff"
													>
														<table
															border="0"
															cellpadding="0"
															cellspacing="0"
															width="100%"
															role="presentation"
														>
															<tbody>
																<tr>
																	<td
																		height="100"
																		class="kn-xs-m-50"
																		style="text-align: center"
																	>
																		<img
																			src="https://zen-meet.vercel.app/icons/icon-152x152.png"
																			alt="Zen Meet"
																			style="width: 80px"
																		/>
																	</td>
																</tr>
																<tr>
																	<td
																		class="kn-xs-fs-30 kn-xs-lh-42 kn-fb-font"
																		style="
																			font-family: 'Poppins', Helvetica, Arial,
																				sans-serif;
																			font-size: 36px;
																			font-weight: 900;
																			line-height: 46px;
																			letter-spacing: -0.6px;
																			color: #151515;
																			text-align: center;
																		"
																		valign="top"
																	>
																		${subject}
																	</td>
																</tr>
																<tr>
																	<td
																		height="10"
																		style="font-size: 1px; line-height: 1px"
																	>
																		&nbsp;
																	</td>
																</tr>
															</tbody>
															<tbody>
																<tr>
																	<td
																		class="kn-fb-font"
																		style="
																			font-family: 'Poppins', Helvetica, Arial,
																				sans-serif;
																			font-size: 18px;
																			font-weight: 300;
																			line-height: 28px;
																			color: #1b1b1b;
																			letter-spacing: -0.2px;
																		"
																		valign="top"
																		align="center"
																	>
																		${body}
																	</td>
																</tr>
																<tr>
																	<td
																		height="15"
																		style="font-size: 1px; line-height: 1px"
																	>
																		&nbsp;
																	</td>
																</tr>
															</tbody>
															${
                                !!btn
                                  ? `<tbody>
																<tr>
																	<td
																		style="font-size: 0"
																		valign="top"
																		align="center"
																	>
																		<!--[if (gte mso 9)|(IE)]><table border="0" cellspacing="0" cellpadding="0" align="center" role="presentation"><tr><td valign="top"><![endif]-->
																		<div
																			style="
																				display: inline-block;
																				vertical-align: top;
																				cursor: pointer;
																			"
																		>
																			<a
																				href="${link}"
																				style="
																					line-height: 1.5;
																					text-decoration: none;
																					word-break: break-word;
																					font-weight: 500;
																					display: block;
																					font-family: 'Poppins', Helvetica,
																						Arial, sans-serif;
																					font-size: 16px;
																					color: #0284c7;
																				"
																			>
																				<table
																					border="0"
																					cellpadding="0"
																					cellspacing="0"
																					role="presentation"
																				>
																					<tbody>
																						<tr>
																							<td
																								style="padding: 5px 9px"
																								valign="top"
																							>
																								<table
																									border="0"
																									cellpadding="0"
																									cellspacing="0"
																									role="presentation"
																								>
																									<tbody>
																										<tr>
																											<td
																												style="
																													padding: 10px 30px;
																													background-color: #e0f2fe;
																													border-radius: 10px;
																												"
																												bgcolor="#e0f2fe"
																												valign="top"
																												align="center"
																											>
																												${btn}
																											</td>
																										</tr>
																									</tbody>
																								</table>
																							</td>
																						</tr>
																					</tbody>
																				</table>
																			</a>
																		</div>
																		<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
																	</td>
																</tr>
															</tbody>`
                                  : ''
                              }
															<tbody>
																<tr>
																	<td
																		height="15"
																		style="font-size: 1px; line-height: 1px"
																	>
																		&nbsp;
																	</td>
																</tr>
																<tr>
																	<td
																		class="kn-fb-font kn-xs-br-disabled"
																		style="
																			font-family: 'Poppins', Helvetica, Arial,
																				sans-serif;
																			font-size: 14px;
																			font-weight: 300;
																			line-height: 28px;
																			color: #9b9b9b;
																			text-align: center;
																		"
																		valign="top"
																	>
																		${!footer ? 'If you didn’t ask for this email, you can ignore this email.' : footer}
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
										<!-- END MODULE: Call to Action 2 -->
										<table
											width="100%"
											border="0"
											cellpadding="0"
											cellspacing="0"
											role="presentation"
										>
											<tbody>
												<tr>
													<td
														height="20"
														style="font-size: 1px; line-height: 1px"
													>
														&nbsp;
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
						<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
					</td>
				</tr>
			</tbody>
		</table>
		<!-- Fix for Gmail on iOS -->
		<div
			class="kn-gmail-fix"
			style="white-space: nowrap; font: 15px courier; line-height: 0"
		>
			&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
			&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
			&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
		</div>
	</body>
</html>
`

module.exports = { emailTemplate }
