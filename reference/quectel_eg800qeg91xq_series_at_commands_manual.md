EG800Q&EG91xQ Series

AT Commands Manual

### LTE Standard Module Series

### Version: 1.

### Date: 202 4 - 11 - 03

### Status: Released


At Quectel, our aim is to provide timely and comprehensive services to our customers. If you
require any assistance, please contact our headquarters:

Quectel Wireless Solutions Co., Ltd.
Building 5, Shanghai Business Park Phase III (Area B), No.1016 Tianlin Road, Minhang District, Shanghai
200233, China
Tel: +86 21 5108 6236
Email: info@quectel.com

Or our local offices. For more information, please visit:
[http://www.quectel.com/support/sales.htm.](http://www.quectel.com/support/sales.htm.)

For technical support, or to report documentation errors, please visit:
[http://www.quectel.com/support/technical.htm.](http://www.quectel.com/support/technical.htm.)
Or email us at: support@quectel.com.

Legal Notices

We offer information as a service to you. The provided information is based on your requirements and we
make every effort to ensure its quality. You agree that you are responsible for using independent analysis
and evaluation in designing intended products, and we provide reference designs for illustrative purposes
only. Before using any hardware, software or service guided by this document, please read this notice
carefully. Even though we employ commercially reasonable efforts to provide the best possible
experience, you hereby acknowledge and agree that this document and related services hereunder are
provided to you on an “as available” basis. We may revise or restate this document from time to time at
our sole discretion without any prior notice to you.

Use and Disclosure Restrictions

### License Agreements

Documents and information provided by us shall be kept confidential, unless specific permission is
granted. They shall not be accessed or used for any purpose except as expressly provided herein.

### Copyright

Our and third-party products hereunder may contain copyrighted material. Such copyrighted material
shall not be copied, reproduced, distributed, merged, published, translated, or modified without prior
written consent. We and the third party have exclusive rights over copyrighted material. No license shall
be granted or conveyed under any patents, copyrights, trademarks, or service mark rights. To avoid
ambiguities, purchasing in any form cannot be deemed as granting a license other than the normal
non-exclusive, royalty-free license to use the material. We reserve the right to take legal action for
noncompliance with abovementioned requirements, unauthorized use, or other illegal or malicious use of
the material.


### Trademarks

Except as otherwise set forth herein, nothing in this document shall be construed as conferring any rights
to use any trademark, trade name or name, abbreviation, or counterfeit product thereof owned by Quectel
or any third party in advertising, publicity, or other aspects.

### Third-Party Rights

This document may refer to hardware, software and/or documentation owned by one or more third parties
(“third-party materials”). Use of such third-party materials shall be governed by all restrictions and
obligations applicable thereto.

We make no warranty or representation, either express or implied, regarding the third-party materials,
including but not limited to any implied or statutory, warranties of merchantability or fitness for a particular
purpose, quiet enjoyment, system integration, information accuracy, and non-infringement of any
third-party intellectual property rights with regard to the licensed technology or use thereof. Nothing herein
constitutes a representation or warranty by us to either develop, enhance, modify, distribute, market, sell,
offer for sale, or otherwise maintain production of any our products or any other hardware, software,
device, tool, information, or product. We moreover disclaim any and all warranties arising from the course
of dealing or usage of trade.

Privacy Policy

To implement module functionality, certain device data are uploaded to Quectel’s or third-party’s servers,
including carriers, chipset suppliers or customer-designated servers. Quectel, strictly abiding by the
relevant laws and regulations, shall retain, use, disclose or otherwise process relevant data for the
purpose of performing the service only or as permitted by applicable laws. Before data interaction with
third parties, please be informed of their privacy and data security policy.

Disclaimer

a) We acknowledge no liability for any injury or damage arising from the reliance upon the information.
b) We shall bear no liability resulting from any inaccuracies or omissions, or from the use of the
information contained herein.
c) While we have made every effort to ensure that the functions and features under development are
free from errors, it is possible that they could contain errors, inaccuracies, and omissions. Unless
otherwise provided by valid agreement, we make no warranties of any kind, either implied or express,
and exclude all liability for any loss or damage suffered in connection with the use of features and
functions under development, to the maximum extent permitted by law, regardless of whether such
loss or damage may have been foreseeable.
d) We are not responsible for the accessibility, safety, accuracy, availability, legality, or completeness of
information, advertising, commercial offers, products, services, and materials on third-party websites
and third-party resources.

Copyright © Quectel Wireless Solutions Co., Ltd. 202 4. All rights reserved.


## About the Document

Revision History

```
Version Date Author Description
```
- 2022 - 09 - 15
    Bronson ZHAN/
    Obuntu QIN
       Creation of the document

```
1.0 2023 - 02 - 21
Bronson ZHAN/
Obuntu QIN
First official release
```
```
1 .1 2024 - 11 - 03 Obuntu QIN
```
1. Updated the applicable modules:
    ⚫ Added applicable module EG916Q-GL;
    ⚫ Updated EG800Q-EU to EG800Q Series;
    ⚫ Updated EG915Q-NA to EG915Q Series.
2. Updated the declaration of AT command examples
    (Chapter 1.7).
3. Updated the AT&V response (Chapter 2.11)
4. Added the default value of <urc_port_value> in
    AT+QURCCFG (Chapter 2.24).
5. Added AT+QPPPDROOP (Chapter 2.26).
6. Updated the value of <rate> in AT+IPR (Chapter
    3.5).
7. Updated the description of AT+CEER (Chapter
    4.2).
8. Added the following commands (Chapters 4.3 &
    4.4):
    AT+QINDCFG="datastatus"
    AT+QINDCFG="mode"
    AT+QINDCFG="sqi"
    AT+QCFG="urc/ri/level"
    AT+QCFG="cmux/urcport"
    AT+QCFG="cmux/baudratework"
    AT+QCFG="aprstlevel"
    AT+QCFG="modemrstlevel"
    AT+QCFG="ledmode"
    AT+QCFG="nat"


```
AT+QCFG="ppp/termframe"
AT+QCFG="rf/tuner_cfg"
AT+QCFG="fast/poweroff"
AT+QCFG="fota/cid"
AT+QCFG="qcautoconnect"
AT+QCFG="sms/listmsgmap"
AT+QCFG="sms/MeNum"
```
9. Updated AT+QCFG="urc/ri/sms" to
    AT+QCFG="urc/ri/smsincoming" (Chapter 4.4.2).
10. Updated the value of <ltebandval> in
    AT+QCFG="band" (Chapter 4.4.1 2 ).
11. Updated the default value of <interval> in
    AT+QCFG="nwoptmz/acq" (Chapter 4.4.1 3 ).
12. Updated the response of the write command
    AT+CPIN=<pin>[,<new_pin>] (Chapter 5.3).
13. Updated the value of <band> in AT+QNWINFO
    (Chapter 6.9).
14. Deleted ATA and ATH commands.
15. Updated ATD command (Chapter 7.1).
16. Deleted “MT” of <mem1>, <mem2> and <mem3>
    (Chapter 8.4–Chapter 8.7).
17. Specified the default value of <stat> in AT+CMGL
    (Chapter 8.6).
18. Added AT+QNETDEVCTL (Chapter 9.13).


## Contents

## Contents





## Table Index

- About the Document
- Contents
- Table Index
- 1 Introduction
   - 1.1. Definitions
   - 1.2. AT Command Syntax
   - 1.3. Supported Character Sets
   - 1.4. AT Command Interfaces
   - 1.5. Unsolicited Result Code
   - 1.6. Turn-off Procedure
   - 1.7. Declaration of AT Command Examples
- 2 General Commands
   - 2.1. ATI Display MT Identification
   - 2.2. AT+GMI Request Manufacturer Identification
   - 2.3. AT+GMM Request TA Model Identification
   - 2.4. AT+GMR Request TA Firmware Revision Identification
   - 2.5. AT+CGMI Request Manufacturer Identification
   - 2.6. AT+CGMM Request MT Model Identification
   - 2.7. AT+CGMR Request MT Firmware Revision Identification
   - 2.8. AT+GSN Request IMEI and SN
   - 2.9. AT+CGSN Request IMEI and SN
   - 2.10. AT&F Reset AT Command Settings to Factory Defaults
   - 2.11. AT&V Display Current Configuration
   - 2.12. AT&W Store Current AT Command Settings to User-Defined Profile
   - 2.13. ATZ Restore All AT Command Settings from User-Defined Profile
   - 2.14. ATQ Set Result Code Presentation Mode
   - 2.15. ATV AT Response Format
   - 2.16. ATE Set Command Echo Mode
   - 2.17. ATS3 Set Command Line Termination Character
   - 2.18. ATS4 Set Response Formatting Character
   - 2.19. ATS5 Set Command Line Editing Character
   - 2.20. ATX Set CONNECT Result Code Format and Monitor Call Progress
   - 2.21. AT+CFUN Set UE Functionality
   - 2.22. AT+CMEE Error Message Format
   - 2.23. AT+CSCS Select TE Character Set
   - 2.24. AT+QURCCFG Configure URC Output Port
   - 2.25. AT+QDIAGPORT Configure Debug UART as AT Port
   - 2.26. AT+QPPPDROOP Terminate PPP Connection
- 3 Serial Interface Control Commands
   - 3.1. AT&C Set DCD Function Mode
   - 3.2. AT&D Set DTR Function Mode
   - 3.3. AT+IFC Set TE-TA Local Data Flow Control
   - 3.4. AT+ICF Set TE-TA Control Character Framing
   - 3.5. AT+IPR Set TE-TA Fixed Local Rate
- 4 Status Control Commands
   - 4.1. AT+CPAS Mobile Equipment Activity Status
   - 4.2. AT+CEER Extended Error Report
   - 4.3. AT+QINDCFG Configure URC Indication
   - 4.4. AT+QCFG Extended Configuration Settings
      - 4.4.1. AT+QCFG="urc/ri/ring" Set RI Behavior When RING URC is Presented
         - Presented 4.4.2. AT+QCFG="urc/ri/smsincoming" Set RI Behavior When Incoming SMS URCs are
      - 4.4.3. AT+QCFG="urc/ri/other" Set RI Behavior When Other URCs are Presented
      - 4.4.4. AT+QCFG="urc/ri/level" Set Default Level of MAIN_RI Pin
      - 4.4.5. AT+QCFG="cmux/urcport" Set Output Port of CMUX URCs
      - 4.4.6. AT+QCFG="cmux/baudratework" Set Baud Rate in CMUX Mode.............................
      - 4.4.7. AT+QCFG="urc/delay" Set Delay Time of URC Indication
      - 4.4.8. AT+QCFG="urc/cache" Enable/Disable URC Cache
      - 4.4.9. AT+QCFG="urc/port" Set URC Output Port
      - 4.4.10. AT+QCFG="risignaltype" RI Signal Output Carrier
      - 4.4.11. AT+QCFG="roamservice" Enable/Disable Roaming Service
      - 4.4.12. AT+QCFG="band" Configure Band
      - 4.4.13. AT+QCFG="nwoptmz/acq" Save Searched Cell Database to NV Automatically
      - 4.4.14. AT+QCFG="usbnet" Set Network Card Interface Type
      - 4.4.15. AT+QCFG="aprstlevel" Set AP Dump Level
      - 4.4.16. AT+QCFG="modemrstlevel" Set CP Dump Level
      - 4.4.17. AT+QCFG="ntp" Set Maximum NTP Re-transmission Count and Interval
      - 4.4.18. AT+QCFG="ledmode" Set NET_STATUS Output Mode
      - 4.4.19. AT+QCFG="nat" Set NIC Working Mode
      - 4.4.20. AT+QCFG="netmaskset" Enable/Disable Customized Netmask
      - 4.4.21. AT+QCFG="ppp/termframe" Enable/Disable PPP TERM Frame Sending
      - 4.4.22. AT+QCFG="rf/tuner_cfg" Set Mapping Between RF Tuner and RF Bands
      - 4.4.23. AT+QCFG="tcp/windowsize" Set TCP Window Available Size
      - 4.4.24. AT+QCFG="TCP/SendMode" Set TCP Sending Mode
      - 4.4.25. AT+QCFG="fast/poweroff" Enable/Disable Fast Power-Off
      - 4.4.26. AT+QCFG="fota/cid" Set PDP Context ID for FOTA Download
      - 4.4.27. AT+QCFG="qcautoconnect" Disable/enable Auto Connect Function in ECM Mode
      - 4.4.28. AT+QCFG="sms/listmsgmap" List Message Map
      - 4.4.29. AT+QCFG="sms/MeNum" Set the Number of Short Messages Stored by ME
- 5 (U)SIM Related Commands
   - 5.1. AT+CIMI Request International Mobile Subscriber Identity (IMSI)
   - 5.2. AT+CLCK Facility Lock
   - 5.3. AT+CPIN Enter PIN
   - 5.4. AT+CPWD Change Password
   - 5.5. AT+CSIM Generic (U)SIM Access
   - 5.6. AT+CRSM Restricted (U)SIM Access
   - 5.7. AT+QCCID Show ICCID
   - 5.8. AT+QPINC Display PIN Remainder Counter........................................................................
   - 5.9. AT+QINISTAT Query Initialization Status of (U)SIM Card
   - 5.10. AT+QSIMDET (U)SIM Card Detection..................................................................................
   - 5.11. AT+QSIMSTAT (U)SIM Card Insertion Status Report
   - 5.12. AT+CCHO Open Logical Channel
   - 5.13. AT+CGLA UICC Logical Channel Access
   - 5.14. AT+CCHC Close Logical Channel
- 6 Network Service Commands
   - 6.1. AT+COPS Operator Selection
   - 6.2. AT+CREG Network Registration Status
   - 6.3. AT+CSQ Signal Quality Report
   - 6.4. AT+CPOL Preferred Operator List
   - 6.5. AT+COPN Read Operator Names
   - 6.6. AT+CTZU Automatic Time Zone Update
   - 6.7. AT+CTZR Time Zone Reporting
   - 6.8. AT+QLTS Obtain the Latest Time Synchronized Through Network
   - 6.9. AT+QNWINFO Query Network Information
   - 6.10. AT+QSPN Display Name of Registered Network
   - 6.11. AT+QENG Switch on/off Engineering Mode
   - 6.12. AT+CIND Command of Control Indicator
- 7 Dial Related Commands
   - 7.1. ATD PPP Dial
   - 7.2. +++ Switch from Data Mode to Command Modeg
   - 7.3. ATO Switch from Command Mode to Data Mode
- 8 Short Message Service Commands
   - 8.1. AT+CSMS Select Message Service
   - 8.2. AT+CMGF Message Format
   - 8.3. AT+CSCA Service Center Address
   - 8.4. AT+CPMS Preferred Message Storage
   - 8.5. AT+CMGD Delete Message
   - 8.6. AT+CMGL List Message
   - 8.7. AT+CMGR Read Message
   - 8.8. AT+CMGS Send Message
   - 8.9. AT+CMMS More Messages to Send
   - 8.10. AT+CMGW Write Message to Memory...............................................................................
   - 8.11. AT+CMSS Send Message from Storage
   - 8.12. AT+CNMA New Message Acknowledgement to UE/TE
   - 8.13. AT+CNMI SMS Event Reporting Configuration
   - 8.14. AT+CSCB Select Cell Broadcast Message Types
   - 8.15. AT+CSDH Show SMS Text Mode Parameters
   - 8.16. AT+CSMP Set SMS Text Mode Parameters
   - 8.17. AT+QCMGS Send Concatenated Messages
   - 8.18. AT+QCMGR Read Concatenated Messages
- 9 Packet Domain Commands
   - 9.1. AT+CGATT Attachment or Detachment of PS
   - 9.2. AT+CGDCONT Define PDP Context
   - 9.3. AT+CGACT Activate or Deactivate PDP Context
   - 9.4. AT+CGDATA Enter Data State............................................................................................
   - 9.5. AT+CGPADDR Show PDP Address
   - 9.6. AT+CGREG Network Registration Status
   - 9.7. AT+CGEREP Packet Domain Event Reporting
   - 9.8. AT+CEREG EPS Network Registration Status
   - 9.9. AT+QGDCNT Packet Data Counter
   - 9.10. AT+QAUGDCNT Auto Save Packet Data Counter
   - 9.11. AT+QNETDEVSTATUS Query USBNet Device Status
   - 9.12. AT+CGCONTRDP PDP Context Read Dynamic Parameters
   - 9.13. AT+QNETDEVCTL Make/Disconnect PDP Call
- 10 Hardware Related Commands
   - 10.1. AT+QPOWD Power off
   - 10.2. AT+CCLK Clock
   - 10.3. AT+CBC Battery Charge
   - 10.4. AT+QADC Read ADC Value
   - 10.5. AT+QSCLK Enable/Disable Low Power Mode
- 11 Other Related Commands
   - 11.1. GNSS Related AT Commands (Not Supported Currently)
   - 11.2. DFOTA Related AT Command
   - 11.3. FTP(S) Related AT Commands
   - 11.4. HTTP(S) Related AT Commands
   - 11.5. TCP(IP) Related AT Commands
   - 11.6. SSL Related AT Commands
- 12 Appendix References
   - 12.1. Factory Default Settings Restorable with AT&F
   - 12.2. AT Command Settings Storable with AT&W
   - 12.3. AT Command Settings Storable with ATZ
   - 12.4. Summary of CME ERROR Codes
   - 12.5. Summary of CMS ERROR Codes
   - 12.6. Summary of URC...................................................................................................................
   - 12.7. SMS Character Sets Conversions
   - 12.8. Release Cause Text List of AT+CEER
- Table 1: Type of AT Commands and Responses Table Index
- Table 2: AT&V Response............................................................................................................................
- Table 3: Numeric Equivalents and Brief Descriptions of ATV0&ATV1 Result Codes
- Table 4: GNSS Related AT Commands
- Table 5: DFOTA Related AT Command
- Table 6: FTP(S) Related AT Commands
- Table 7: HTTP(S) Related AT Commands
- Table 8: TCP(IP) Related AT Commands.................................................................................................
- Table 9: SSL Related AT Commands
- Table 10: Related Documents
- Table 11: Terms and Abbreviations
- Table 12: Factory Default Settings Restorable with AT&F
- Table 13: AT Command Settings Storable with AT&W
- Table 14: AT Command Settings Storable with ATZ
- Table 15: Different Coding Schemes of +CME ERROR: <err>
- Table 16: Different Coding Schemes of +CMS ERROR: <err>
- Table 17: Summary of URC
- Table 18: The Way of SMS Text Input or Output
- Table 19: The Input Conversions Table (DCS = GSM 7 bit and AT+CSCS="GSM")
- Table 20: The Output Conversions Table (DCS = GSM 7 bit and AT+CSCS="GSM")
- Table 21: GSM Extended Characters
- Table 22: The Input Conversions Table (DCS = GSM 7 bit and AT+CSCS="IRA")
- Table 23: IRA Extended Characters
- Table 24: The Output Conversions Table (DCS = GSM 7 bit and AT+CSCS="IRA")
- Table 25: GSM Extended Characters
- Table 26: List of Location ID List
- Table 27: List of Cause


## 1 Introduction

This document gives details of the AT Command Set supported by Quectel EG800Q series and EG91xQ
family (EG915Q series and EG916Q-GL) modules.

### 1.1. Definitions

⚫ <CR> Carriage return character.
⚫ <LF> Line feed character.
⚫ <...> Parameter name. Angle brackets do not appear on the command line.
⚫ [...] Optional parameter of a command or an optional part of TA information response.
Square brackets do not appear on the command line. When an optional parameter is
not given in a command, the new value equals its previous value or the default settings,
unless otherwise specified.
⚫ Underline Default setting of a parameter.

### 1.2. AT Command Syntax

All command lines must start with AT or at and end with <CR>. Information responses and result codes
always start and end with a carriage return character and a line feed character:
<CR><LF><response><CR><LF>. Throughout this document, only the commands and responses are
presented, while carriage return and line feed characters are deliberately omitted.
AT commands implemented by EG800Q and EG91xQ family modules can be separated into two
categories syntactically: “basic command”, and “extended command”, as listed below:

⚫ Basic Command
⚫ Basic command format is AT<x><n>, or AT&<x><n>, where <x> is the command, and <n> is/are the
argument(s) for that command. An example of this is ATE<n>, which tells the DCE (Data
Circuit-terminating Equipment) whether received characters should be echoed back to the DTE (Data
Terminal Equipment) according to the value of <n>. <n> is optional and a default will be used if it is
omitted.

⚫ Extended Command
⚫ These commands can be executed in several modes, as shown in the following table:


Table 1 : Type of AT Commands and Responses

Multiple commands can be placed on a single line using a semi-colon (;) between commands. In such
cases, only the first command should have AT prefix. Commands can be in upper or lower case.

When entering AT commands, spaces should be ignored except in the following cases:

⚫ Within quoted strings, where spaces are preserved;
⚫ Within an unquoted string or numeric parameter;
⚫ Within an IP address;
⚫ Within the AT command name up to and including a =,? or =?.

On input, at least a carriage return is required. A newline character is ignored so it is permissible to use
carriage return/line feed pairs on the input.

If no command is entered after the AT token, OK will be returned. If an invalid command is entered,
ERROR will be returned.

Optional parameters, unless explicitly stated, need to be provided up to the last parameter being entered.

### 1.3. Supported Character Sets

The AT command interface of LTE standard modules defaults to the GSM character set. LTE standard
modules support the following character sets:

⚫ GSM format
⚫ UCS
⚫ IRA

The character set can be configured and querried with AT+CSCS (3GPP TS 27.007) and it is defined in
3GPP TS 27.005. The character set affects transmission and reception of SMS and SMS Cell Broadcast

Command Type Syntax Description

Test Command AT+<cmd>=?

```
Test the existence of the corresponding
command and return information about the
type, value, or range of its parameter.
```
Read Command AT+<cmd>?
Check the current parameter value of the
corresponding command.

Write Command AT+<cmd>=<p1>[,<p2>[,<p3>[...]]] Set user-definable parameter value.

Execution Command AT+<cmd>
Return a specific information parameter or
perform a specific action.


Messages, as well as the entry and display of phone book entry text fields.

### 1.4. AT Command Interfaces

The main UART port and two USB ports (USB modem port and USB AT port) support AT command
communication and data transfer.

### 1.5. Unsolicited Result Code

Unsolicited Result Code (URC) is not issued in response to an executed AT command, but as a report
message issued by the modules without being requested by the TE. It is automatically issued by the
module in response to a certain event. Typical URC triggering events include incoming calls (RING),
received short messages, etc.

### 1.6. Turn-off Procedure

The safest and best way to turn off the module is to execute AT+QPOWD. This procedure is performed by
letting the module log off from the network and allowing the software to enter a secure and safe data state
before disconnecting the power supply.

After sending AT+QPOWD, do not enter any other AT commands. Once the command is executed
successfully, the module will output POWERED DOWN and then enter the power down mode. To avoid
data loss, it is suggested to wait for 1s to disconnect the power supply after the URC POWERED DOWN
is outputted. If POWERED DOWN cannot be received within 65 s, the power supply shall be
disconnected compulsorily.

### 1.7. Declaration of AT Command Examples

The AT command examples in this document are provided to help you learn about the use of the AT
commands introduced herein. The examples, however, should not be taken as Quectel’s
recommendations or suggestions about how to design a program flow or what status to set the module
into. Sometimes multiple examples may be provided for one AT command. However, this does not mean
that there is a correlation among these examples, or that they should be executed in a given sequence.
The URLs, domain names, IP addresses, usernames/accounts, and passwords (if any) in the AT
command examples are provided for illustrative and explanatory purposes only, and they should be
modified to reflect your actual usage and specific needs.


## 2 General Commands

### 2.1. ATI Display MT Identification

This Execution Command returns the MT identification.

#### Parameter

#### Example

##### ATI

Quectel
EG800Q
Revision: EG800QEULCR01A03M

OK

#### ATI Display Product Identification Information

```
Execution Command
ATI
```
```
Response
Quectel
<objectID>
Revision: <revision>
```
```
OK
Maximum Response Time 300 ms
Characteristics /
Reference
V.25ter
```
```
<objectID> String type. Device type identifier.
<revision> String type. Product firmware version identifier.
```

### 2.2. AT+GMI Request Manufacturer Identification

This command returns the manufacturer identification. It is identical to AT+CGMI.

### 2.3. AT+GMM Request TA Model Identification

This command returns the TA model identification. It is identical to AT+CGMM in Chapter 2.6.

#### Parameter

#### AT+GMI Request Manufacturer Identification

```
Test Command
AT+GMI=?
```
```
Response
OK
Execution Command
AT+GMI
```
```
Response
Quectel
```
```
OK
Maximum Response Time 300 ms
Characteristics /
Reference
V.25ter
```
#### AT+GMM Request TA Model Identification

```
Test Command
AT+GMM=?
```
```
Response
OK
Execution Command
AT+GMM
```
```
Response
<objectID>
```
```
OK
Maximum Response Time 300 ms
Characteristics /
Reference
V.25ter
```
```
<objectID> String type. Device type identifier.
```

### 2.4. AT+GMR Request TA Firmware Revision Identification

This command returns the product firmware version. It is identical to AT+CGMR.

#### Parameter

#### Example

##### AT+GMR

##### EG800QEULCR01A03M

##### OK

### 2.5. AT+CGMI Request Manufacturer Identification

This command returns the manufacturer identification. It is identical to AT+GMI.

#### AT+GMR Request TA Firmware Revision Identification

```
Test Command
AT+GMR=?
```
```
Response
OK
Execution Command
AT+GMR
```
```
Response
<revision>
```
```
OK
Maximum Response Time 300 ms
Characteristics /
Reference
V.25ter
```
```
<revision> String type. product firmware version identifier.
```
#### AT+CGMI Request Manufacturer Identification

```
Test Command
AT+CGMI=?
```
```
Response
OK
Execution Command
AT+CGMI
```
```
Response
Quectel
```
```
OK
```

### 2.6. AT+CGMM Request MT Model Identification

This command returns the product model information. It is identical to the above AT+GMM.

#### Parameter

### 2.7. AT+CGMR Request MT Firmware Revision Identification

This command returns the MT firmware version identification. It is identical to AT+GMR in Chapter 2.4.

```
Maximum Response Time 300 ms
```
```
Characteristics /
Reference
3GPP TS 27.
```
#### AT+CGMM Request MT Model Identification

```
Test Command
AT+CGMM=?
```
```
Response
OK
Execution Command
AT+CGMM
```
```
Response
<objectID>
```
```
OK
Maximum Response Time 300 ms
Characteristics /
Reference
3GPP TS 27.
```
```
<objectID> String type. Product model identifier.
```
#### AT+CGMR Request MT Firmware Revision Identification

```
Test Command
AT+CGMR=?
```
```
Response
OK
Execution Command
AT+CGMR
```
```
Response
<revision>
```

#### Parameter

### 2.8. AT+GSN Request IMEI and SN

This command returns the International Mobile Equipment Identity (IMEI) number, which permits the user
to identify individual ME device, and the Serial Number (SN) of the ME. It is identical to the AT+CGSN in
Chapter 2.9.

##### OK

```
Maximum Response Time 300 ms
Characteristics /
Reference
3GPP TS 27.
```
```
<revision> String type. MT firmware version identifier.
```
#### AT+GSN Request International Mobile Equipment Identity (IMEI) and SN

```
Test Command
AT+GSN=?
```
```
Response
+GSN: (list of supported <snt>s)
```
```
OK
Write Command
AT+GSN=<snt>
```
```
Response
If <snt>=0, query SN of the ME:
+GSN: <SN>
```
```
OK
If <snt>=1, query IMEI of the ME:
+GSN: <IMEI>
```
```
OK
Execution Command
AT+GSN
```
```
Response
<IMEI>
```
```
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CMS ERROR: <err>
```

#### Parameter

### 2.9. AT+CGSN Request IMEI and SN

This command returns the International Mobile Equipment Identity (IMEI) number, which permits the user
to identify individual ME device, and the Serial Number (SN) of ME. It is identical to the AT+GSN in
Chapter 2.8.

```
Maximum Response Time 300 ms
Characteristics /
Reference
3GPP TS 27.
```
```
<snt> Integer type. Whether to query SN or IMEI of the ME.
0 Query SN of the ME
1 Query IMEI of the ME
<SN> String type. SN of the ME.
<IMEI> String type. IMEI of the ME.
<err> Error codes. For more details, see Chapter 12.5.
```
#### AT+CGSN Request International Mobile Equipment Identity (IMEI)

```
Test Command
AT+CGSN=?
```
```
Response
+CGSN: (list of supported <snt>s)
```
```
OK
Write Command
AT+CGSN=<snt>
```
```
Response
If <snt>=0, query SN of the ME:
+CGSN: <SN>
```
```
OK
If <snt>=1, query IMEI of the ME:
+CGSN: <IMEI>
```
```
OK
Execution Command
AT+CGSN
```
```
Response
<IMEI>
```
```
OK
Or
ERROR
```

#### Parameter

### 2.10. AT&F Reset AT Command Settings to Factory Defaults

This command resets all AT command settings to the default values specified by the manufacturer. (See
Table 12 ).

#### Parameter

```
If there is any error related to ME functionality:
+CMS ERROR: <err>
Maximum Response Time 300 ms
Characteristics /
Reference
3GPP TS 27.
```
```
<snt> Integer type. Whether to query SN or IMEI of the ME.
0 Query SN of the ME
1 Query IMEI of the ME
<SN> String type. SN of the ME.
<IMEI> String type. IMEI of the ME.
<err> Error codes. For more details, see Chapter 12.5.
```
#### AT&F Reset AT Command Settings to Factory Defaults

```
Execution Command
AT&F[<value>]
```
```
Response
OK
Maximum Response Time 300 ms
Characteristics /
Reference
V.25ter
```
```
<value> Integer type.
0 Reset all AT command settings to factory defaults
```

### 2.11. AT&V Display Current Configuration

This command displays the current settings of certain AT command parameters (see Table 2 ), including
the single-letter AT command parameters that are not readable.

## Table 2: AT&V Response............................................................................................................................

### 2.12. AT&W Store Current AT Command Settings to User-Defined Profile

This command stores the current AT command settings to a user-defined profile in non-volatile memory.
(See Table 13 ). The AT command settings will be automatically restored from the user-defined profile
during power-up or if ATZ is executed.

#### AT&V Display Current Configuration

```
Execution Command
AT&V
```
```
Response
OK
Maximum Response Time 300 ms
Characteristics /
Reference
V.25ter
```
##### AT&V

##### &C: 1

##### &D: 2

##### &F: 0

##### &W: 0

##### E: 1

##### Q: 0

##### V: 1

##### X: 4

##### Z: 0

##### S3: 13

##### S4: 10

##### S5: 8

##### S12: 50

##### OK


#### Parameter

### 2.13. ATZ Restore All AT Command Settings from User-Defined Profile

This command first resets the AT command settings to factory defaults. Afterwards, the AT command
settings are restored from the user-defined profile in the non-volatile memory, if they have been stored
with AT&W before (See Table 14 ).

Any additional AT command on the same command line may be ignored.

#### Parameter

#### AT&W Store Current AT Command Settings to User-Defined Profile

```
Execution Command
AT&W[<n>]
```
```
Response
OK
Maximum Response Time 300 ms
Characteristics /
Reference
V.25ter
```
```
<n> Integer type.
0 Profile number to store current AT command settings.
```
#### ATZ Restore All AT Command Settings from User-Defined Profile

```
Execution Command
ATZ[<value>]
```
```
Response
OK
Maximum Response Time 300 ms
Characteristics /
Reference
V.25ter
```
```
<value> Integer type.
0 Reset to profile number 0.
```

### 2.14. ATQ Set Result Code Presentation Mode

This command controls whether the result code is transmitted to the TE. Other information text
transmitted as response is not affected.

#### Parameter

### 2.15. ATV AT Response Format

This command determines the contents of header and trailer transmitted with AT command result codes
and information responses.

The numeric equivalents and brief descriptions of results code are listed in Table 3.

#### ATQ Set Result Code Presentation Mode

```
Execution Command
ATQ<n>
```
```
Response
If <n>=0:
OK
```
```
If <n>=1:
(none)
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configuration is not saved.
Reference
V.25ter
```
```
<n> Integer type.
0 TA transmits result code
1 Result codes are suppressed and not transmitted
```
#### ATV AT Response Format

```
Execution Command
ATV<value>
```
```
Response
When <value>=0:
0
```
```
When <value>=1:
OK
Maximum Response Time 300 ms
```

#### Parameter

#### Example

ATV1 //Set <value>=1
OK
AT+CSQ
+CSQ: 30, 99

OK
//When <value>=1, the result code is OK.
ATV0 //Set <value>= 0
0
AT+CSQ
+CSQ: 30, 99
0 //When <value>=0, the result code is 0.

## Table 3: Numeric Equivalents and Brief Descriptions of ATV0&ATV1 Result Codes

```
Characteristics The command takes effect immediately.^
The configuration is not saved.
Reference
V.25ter
```
```
<value> Integer type.
0 Information response: <text><CR><LF>
Short result code format: <numeric code><CR>
1 Information response: <CR><LF><text><CR><LF>
Long result code format: <CR><LF><verbose code><CR><LF>
```
```
ATV1 ATV0 Description
```
```
OK 0 Acknowledges execution of a command
```
```
CONNECT 1
A connection has been established; the DCE is switching from
command mode to data mode
RING 2 DCE has detected an incoming call signal from network
```
```
NO CARRIER 3
The connection has been terminated or the attempt to establish
a connection failed
```
##### ERROR 4

```
Command not recognized, command line maximum length
exceeded, parameter value invalid, or other problem with
processing the command line
```

### 2.16. ATE Set Command Echo Mode

This command controls whether TA echoes characters received from TE or not in AT command mode.

#### Parameter

### 2.17. ATS3 Set Command Line Termination Character

This command determines the character that terminates an incoming command line, which is recognized
by TA. It is also generated for result codes and information text, along with character value set via ATS4.

```
NO DIALTONE 6 No dial tone detected
```
```
BUSY 7 Engaged (busy) signal detected
```
##### NO ANSWER 8

```
"@" (Wait for Quiet Answer) dial modifier was used, but remote
ringing followed by 5 s of silence was not detected before
connection timer (S7) expired
```
#### ATE Set Command Echo Mode

```
Execution Command
ATE<value>
```
```
Response
OK
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configuration is not saved.
Reference
V.25ter
```
```
<value> Integer type. Whether to echo the characters received from TE.
0 Echo mode OFF
1 Echo mode ON
```
#### ATS3 Set Command Line Termination Character

```
Read Command
ATS3?
```
```
Response
<n>
```
```
OK
Write Command
ATS3=<n>
```
```
Response
OK
```

#### Parameter

### 2.18. ATS4 Set Response Formatting Character

This command determines the character generated by TA for result code and information text, along with
the command line termination character set via ATS3.

#### Parameter

```
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configuration is not saved.
Reference
V.25ter
```
```
<n> Integer type. Command line termination character. Range: 0–127. Default: 13.
```
#### ATS4 Set Response Formatting Character

```
Read Command
ATS4?
```
```
Response
<n>
```
```
OK
Write Command
ATS4=<n>
```
```
Response
OK
Maximum Response Time 300 ms
```
```
Characteristics The command takes effect immediately.^
The configuration is not saved.
Reference
V.25ter
```
```
<n> Integer type. Response formatting character. Range: 0–127. Default: 10.
```

### 2.19. ATS5 Set Command Line Editing Character

This command determines the character value used by the module to delete the immediately preceding
character from the AT command line (i.e. equates to backspace key).

#### Parameter

### 2.20. ATX Set CONNECT Result Code Format and Monitor Call Progress

This command determines whether TA transmits particular result codes to the TE or not. It also controls
whether TA detects the presence of a dial tone when it begins dialing and the engaged tone (busy signal)
or not.

#### ATS5 Set Command Line Editing Character

```
Read Command
ATS5?
```
```
Response
<n>
```
```
OK
Write Command
ATS5=<n>
```
```
Response
OK
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configuration is not saved.
Reference
V.25ter
```
```
<n> Integer type. Command line editing character. Range: 0–127. Default: 8.
```
#### ATX Set CONNECT Result Code Format and Monitor Call Progress

```
Execution Command
ATX<value>
```
```
Response
OK
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configurations can be saved with AT&W.
Reference
V.25ter
```

#### Parameter

### 2.21. AT+CFUN Set UE Functionality

This command controls the UE functionality level. It can also be used to reset the UE.

```
<value> Integer type.
0 Only CONNECT result code returned, dial tone and busy detection are both disabled.
1 Only CONNECT<text> result code returned, dial tone and busy detection are both
disabled.
2 CONNECT<text> result code returned, dial tone detection is enabled, and busy
detection is disabled.
3 CONNECT<text> result code returned, dial tone detection is disabled, and busy
detection is enabled.
4 CONNECT<text> result code returned, and dial tone and busy detection are both
enabled.
```
#### AT+CFUN Set UE Functionality

```
Test Command
AT+CFUN=?
```
```
Response
+CFUN: (list of supported <fun>s),(list of supported <rst>s)
```
##### OK

```
Read Command
AT+CFUN?
```
```
Response
+CFUN: <fun>
```
##### OK

```
Write Command
AT+CFUN=<fun>[,<rst>]
```
```
Response
OK
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 15 s, determined by network.
```
```
Characteristics
The command takes effect immediately.
The configuration is not saved.
Reference
3GPP TS 27.007
```

#### Parameter

#### Example

AT+CFUN=0 //Switch UE to minimum functionality.
OK
AT+COPS?
+COPS: 0 //No operator is registered.

OK
AT+CPIN?
+CME ERROR: 1 3 //(U)SIM failure.

AT+CFUN=1 //Switch UE to full functionality.
OK

+CPIN: SIM PIN
AT+CPIN=1234
OK

+CPIN: READY

+QUSIM: 1

+QIND: PB DONE

+QIND: SMS DONE
AT+CPIN?
+CPIN: READY

OK
AT+COPS?
+COPS: 0,0,"CHINA MOBILE",7 //Operator is registered.

```
<fun> Integer type.
0 Minimum functionality
1 Full functionality
4 Disable the ME from both transmitting and receiving RF signals
<rst> Integer type.
0 Do not reset the ME before setting it to <fun> functionality level.
1 Reset the ME. Device is fully functional after the reset. This value is available only
for <fun>=1
<err> Error codes. For more details, see Chapter 12.4.
```

##### OK

### 2.22. AT+CMEE Error Message Format

This command controls the format of error result codes: ERROR, error numbers or verbose messages as
+CME ERROR: <err> and +CMS ERROR: <err>. This command disables or enables the use of final
result code +CME ERROR: <err> as the indication of an error.

#### Parameter

```
<n> Integer type.
0 Disable result code and use ERROR instead
1 Enable result code and use numeric values
2 Enable result code and use verbose values
```
#### Example

AT+CMEE=0 //Disable result code.
OK
AT+CPIN?
ERROR //Only ERROR is displayed

AT+CMEE=1 //Enable error result code with numeric values.
OK

#### AT+CMEE Error Message Format

```
Test Command
AT+CMEE=?
```
```
Response
+CMEE: (list of supported <n>s)
```
```
OK
Read Command
AT+CMEE?
```
```
Response
+CMEE: <n>
```
```
OK
Write Command
AT+CMEE=<n>
```
```
Response
OK
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configuration is not saved.
Reference
3GPP TS 27.007
```

##### AT+CPIN?

##### +CME ERROR: 10

AT+CMEE=2 //Enable error result code with verbose (string) values.
OK
AT+CPIN?
+CME ERROR: SIM not inserted

### 2.23. AT+CSCS Select TE Character Set

This command informs the MT whose character set is used by the TE. TA is then able to convert character
strings correctly between TE and MT character sets.

#### Parameter

#### Example

AT+CSCS? //Query the current character set.
+CSCS: "GSM" //The character set is GSM.

#### AT+CSCS Select TE Character Set

```
Test Command
AT+CSCS=?
```
```
Response
+CSCS: (list of supported <chset>s)
```
```
OK
Read Command
AT+CSCS?
```
```
Response
+CSCS: <chset>
```
```
OK
Write Command
AT+CSCS=<chset>
```
```
Response
OK
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configuration is not saved.
Reference
3GPP TS 27.007
```
```
<chset> String type. Character set
"GSM" GSM default alphabet
"IRA" International reference alphabet
"UCS2" UCS2 alphabet
```

##### OK

AT+CSCS="UCS2" //Set the character set to "UCS2".
OK
AT+CSCS?
+CSCS: "UCS2" //The character set is UCS2 after the configuration.

OK

### 2.24. AT+QURCCFG Configure URC Output Port

This command configures the URC output port.

#### Parameter

#### AT+QURCCFG Configure URC Indication Option

```
Test Command
AT+QURCCFG=?
```
```
Response
+QURCCFG: "urcport",(list of supported <urc_port_valu
e>s)
```
```
OK
Write Command
AT+QURCCFG="urcport"[,<urc_port
_value>]
```
```
Response
If the optional parameter is omitted, query the current setting:
+QURCCFG: "urcport",<urc_port_value>
```
```
OK
```
```
If the optional parameter is specified, set the URC output port:
OK
Or
ERROR
Maximum Response Time 300 ms
```
```
Characteristics The command takes effect immediately.^
The configuration is saved automatically.
```
```
<urc_port_value> String type. URC output port.
"usbat" USB AT port
"usbmodem" USB modem port
"uart1" Main UART
"uart2" Debug UART
"all" All ports
```

#### Example

##### AT+QURCCFG=?

+QURCCFG: "urcport",("usbat","usbmodem","uart1","uart2","all")

OK
AT+QURCCFG="urcport"
+QURCCFG: "urcport","usbat"

OK
AT+QURCCFG="urcport","usbmodem"
OK
AT+QURCCFG="urcport"
+QURCCFG: "urcport","usbmodem"

OK

### 2.25. AT+QDIAGPORT Configure Debug UART as AT Port

This commans configures debug UART as AT port.

#### Parameter

#### AT+QDIAGPORT Configurate Debug UART as AT Port

```
Read Command
AT+QDIAGPORT=?
```
```
Response
+QDIAGPORT: (list of supported <num>s)
```
```
OK
Write Command
AT+QDIAGPORT=<num>
```
```
Response
OK
Or
ERROR
Maximum Response Time 12 s
```
```
Characteristics
The command takes effect after module is rebooted.
The configuration is saved automatically.
```
```
<num> Integer type.
0 Debug UART port
1 AT port
```

1. When Debug UART is configured to AT port, the baud rate is fixed to 115200 bps.
2. Outputting module booting message remains enabled when Debug UART is configured to AT port.
3. It is recommended not to set up data connection on Debug UART due to limited baud rate.

### 2.26. AT+QPPPDROOP Terminate PPP Connection

This command terminates the PPP connection.

#### Parameter

1. This command will return OK immediately and then perform following procedures:
Step1: Check if PPP link exists. Run step2 if exists.
    Step2: Hung up PPP connection and then output NO CARRIER to the port that’s used for dialing up.
2. if <op> is 1, TERM REQ frame will be sent to peer only when PPP connection exists and dial-up port
    is in data mode.
3. If <op> is omitted, the hung-up procedure is the same as one that <op> is set to 1.

#### AT+QPPPDROOP Terminate PPP Connection

```
Test Command
AT+QPPPDROP=?
```
```
Response
+ QPPPDROP : (list of supported <op>s)
```
```
OK
Write Command
AT+QPPPDROP[=<op>]
```
```
Response
OK
```
```
Maximum Response Time 300 ms
```
```
Characteristics The command takes effect^ immediately.^
The configuration is not saved.
```
```
<op> Integer Type. The operation about dropping PPP connection.
0 Hung up PPP connection without sending TERM REQ frame to peer.
1 Hung up PPP connection and automatically send TERM REQ frame to peer.
2 Hung up PPP connection with sending TERM REQ frame to peer.
```
##### NOTE

##### NOTES


#### Example

AT+QPPPDROP //send command from USB_AT port
OK //receive result from USB_AT port

//MCU’s Dial-up port receive the TERM REQ frame from module
7E FF 7D 23 C0 21 7D 25 7D 25 7D 20 7D 24 5C A4 7E

NO CARRIER //PPP has been terminated and output this URC from dial-up port. If ATV0 is set,
module will show NO CARRIER as number format(3).


## 3 Serial Interface Control Commands

### 3.1. AT&C Set DCD Function Mode

This command controls the behavior of the UE’s DCD (data carrier detection) line.

#### Parameter

### 3.2. AT&D Set DTR Function Mode

This command determines how the UE responds if DTR line is changed from low to high level in data
mode.

#### AT&C Set DCD Function Mode

```
Execution Command
AT&C[<value>]
```
```
Response
OK
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configurations can be saved with AT&W.
Reference
V.25ter
```
```
<value> Integer type. It determines how the state of circuit (DCD) relates to the detection of
received line signal from the distant end.
0 DCD line is always ON
1 DCD line is ON only in the presence of data carrier
```
#### AT&D Set DTR Function Mode

```
Execution Command
AT&D[<value>]
```
```
Response
OK
Maximum Response Time 300 ms
Characteristics The command takes effect immediately.
```

#### Parameter

### 3.3. AT+IFC Set TE-TA Local Data Flow Control

This command sets the serial port flow control for data mode.

```
The configurations can be saved with AT&W.
Reference
V.25ter
```
```
<value> Integer type.
0 TA ignores status on DTR.
1 Low→High on DTR: Switch to command mode while the call is still connected.
2 Low→High on DTR: Disconnect data call, and switch to command mode. When DTR
is at high level, auto-answer function is disabled.
```
#### AT+IFC Set TE-TA Local Data Flow Control

```
Test Command
AT+IFC=?
```
```
Response
+IFC: (list of supported <dce_by_dte>s),(list of supported
<dte_by_dce>s)
```
```
OK
Read Command
AT+IFC?
```
```
Response
+IFC: <dce_by_dte>,<dte_by_dce>
```
```
OK
Write Command
AT+IFC=<dce_by_dte>,<dte_by_dce>
```
```
Response
OK
Or
ERROR
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configurations can be saved with AT&W.
Reference
V.25ter
```

#### Parameter

```
Flow control is only applicable for data mode.
```
#### Example

AT+IFC=2,2 //Enable the hardware flow control.
OK
AT+IFC?
+IFC: 2,2

OK

### 3.4. AT+ICF Set TE-TA Control Character Framing

This command determines the serial interface character framing format and parity received by TA from
TE.

```
<dce_by_dte> Integer type. Specifies the method that will be used by TE when receiving data from
TA.
0 None
2 RTS flow control
<dte_by_dce> Integer type. Specifies the method that will be used by TA when receiving data from
TE.
0 None
2 CTS flow control
```
#### AT+ICF Set TE-TA Control Character Framing

```
Test Command
AT+ICF=?
```
```
Response
+ICF: (list of supported <format>s),(list of supported
<parity>s)
```
```
OK
Read Command
AT+ICF?
```
```
Response
+ICF: <format>,<parity>
```
```
OK
Write Command
AT+ICF=[<format>,[<parity>]]
```
```
Response
OK
```
##### NOTE


#### Parameter

1. The command is valid only in command mode.
2. <parity> field is omitted if no parity is specified in <format> field.

### 3.5. AT+IPR Set TE-TA Fixed Local Rate

This command queries and sets the UART baud rate.

```
Or
ERROR
Maximum Response Time 300 ms
```
```
Characteristics The command takes effect immediately.^
The configurations can be saved with AT&W.
Reference
V.25ter
```
```
<format> Integer type.
3 8 data 0 parity 1 stop
<parity> Integer type.
0 Odd
1 Even
2 Mark (1)
3 Space (0)
```
#### AT+IPR Set TE-TA Fixed Local Rate

```
Test Command
AT+IPR=?
```
```
Response
+IPR: (list of supported auto detectable <rate>s),(list of
supported fixed-only <rate>s)
```
```
OK
Read Command
AT+IPR?
```
```
Response
+IPR: <rate>
```
```
OK
Write Command
AT+IPR=<rate>
```
```
Response
OK
```
##### NOTE


#### Parameter

```
<rate> String type. Baud rate per second.
4800
9600
19200
38400
57600
115200
230400
460800
921600
```
1. If a fixed baud rate is set, make sure that both TE (DTE, usually external processor) and TA (DCE,
    Quectel module) are configured to the same rate.
2. AT+IPR value cannot be restored with AT&F and ATZ; but it is still storable with AT&W.
3. In multiplex mode, the baud rate cannot be changed with the Write Command AT+IPR=<rate>;
    and the setting is invalid and cannot be stored even if AT&W is executed after the Write
    Command.
4. A selected baud rate takes effect after the Write Commands are executed and acknowledged by
    OK.
5. After the baud rate is changed, it is necessary to wait for 500 ms to send the next command.

#### Example

AT+IPR=115200 //Set fixed baud rate to 115200 bps
OK
AT&W //Store current setting, that is, the serial communication speed is
OK 115200 bps after restarting module
AT+IPR?
+IPR: 115200

OK
AT+IPR=115200;&W //Set fixed baud rate to 115200 bps and store current setting
OK

```
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configurations can be saved with AT&W.
Reference
V.25ter
```
##### NOTE


## 4 Status Control Commands

### 4.1. AT+CPAS Mobile Equipment Activity Status

This command queries the module’s activity status.

#### Parameter

#### AT+CPAS Mobile Equipment Activity Status

```
Test Command
AT+CPAS=?
```
```
Response
+CPAS: (list of supported <pas>s)
```
```
OK
Execution Command
AT+CPAS
```
```
Response
TA returns the activity status of ME:
+CPAS: <pas>
```
```
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
Characteristics /
Reference
3GPP TS 27.007
```
```
<pas> Integer type. ME activity status.
0 Ready
2 Unknow
3 Ringing
4 Call in progress or call on hold
<err> Error codes. For more details, see Chapter 12.4.
```

#### Example

##### AT+CPAS

+CPAS: 0 //The module is idle

OK
RING
AT+CLCC
+CLCC: 1,1,4,0,0,"15695519173",161

OK
AT+CPAS
+CPAS: 3 //The module is ringing

OK
AT+CLCC
+CLCC: 1,0,0,0,0," 10010 ",129

OK
AT+CPAS
+CPAS: 4 //Call in progress

OK

### 4.2. AT+CEER Extended Error Report

This command queries an extended error and reports the cause of the last failed operation, such as:

⚫ Failure to activate, register, query, deactivate or deregister a supplementary service
⚫ Failure to activate or deactivate a PDP context

The release cause <text> is a text that describes the cause information given by the network.

#### AT+CEER Extended Error Report

```
Test Command
AT+CEER=?
```
```
Response
OK
Execution Command
AT+CEER
```
```
Response
+CEER: <text>
OK
Or
ERROR
```

#### Parameter

```
<text> Release cause text. Reason for the last call failure to setup or release (listed in
Chapter 12.8). Both CS and PS domain call types are reported. Cause data is
captured from Call Manager events and cached locally for later use by this
command.
<err> Error codes. For more details, see Chapter 12.4.
```
### 4.3. AT+QINDCFG Configure URC Indication

This command controls URC indication.

```
If error is related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
Characteristics /
```
#### AT+QINDCFG Configure URC Indication

```
Test Command
AT+QINDCFG=?
```
```
Response
+QINDCFG: "all",(list of supported <enable>s),(list of
supported <save_to_nvram>s)
+QINDCFG: "csq",(list of supported <enable>s),(list of
supported <save_to_nvram>s)
+QINDCFG: "datastatus",(list of supported
<enable>s),(list of supported <save_to_nvram>s)
+QINDCFG: "mode",(list of supported <enable>s),(list of
supported <save_to_nvram>s)
+QINDCFG: "smsfull",(list of supported <enable>s),(list of
supported <save_to_nvram>s)
+QINDCFG: "smsincoming",(list of supported
<enable>s),(list of supported <save_to_nvram>s)
+QINDCFG: "act",(list of supported <enable>s),(list of
supported <save_to_nvram>s)
+QINDCFG: "sqi",(list of supported <enable>s),(list of
supported <save_to_nvram>s)
```
```
OK
Write Command
AT+QINDCFG=<urctype>[,<enable>[,<
save_to_nvram>]]
```
```
Response
If the optional parameters are omitted, query the current
setting:
```

#### Parameter

<urctype> String type. URC type.
"all" Main switch of all URCs. Default: ON.
"csq" Indication of signal strength and channel bit error rate change
(similar to AT+CSQ). Default: OFF. If this configuration is ON,
present:
+QIND: "csq",<rssi>,<ber>
"datastatus" The URC of data service status. Default: OFF. If
<enable> is set to ON, the following URC is reported:
+QIND: "datastatus",<suspended>,<reason> (the URC is
currently not supported)
<suspended> Reserved.
<reason> Integer type. The values are as follows:
0 SUSPEND_NO_CAUSE
1 SUSPEND_BY_RAU_ATTACH
2 SUSPEND_BY_LAU
3 SUSPEND_BY_TAU
4 SUSPEND_BY_CS_SERVICE
5 SUSPEND_BY_DS_OPERATION
6 SUSPEND_BY_POWERUP
"mode" The URC of network main mode and sub mode. Default: OFF.
If <enable> is set to ON, the following URC is reported:
^MODE: <main_mode>,<sub_mode>
<main_mode> Integer type. Network main mode.
0 SYSINFO_SYSTEMO_MODE_NO_SERVICE
1 SYSINFO_SYSTEMO_MODE_RESERVED_1
2 SYSINFO_SYSTEMO_MODE_RESERVED_2
3 SYSINFO_SYSTEMO_MODE_GSM_GPRS
5 SYSINFO_SYSTEMO_MODE_WCDMA

```
+QINDCFG: <urctype>,<enable>
```
```
OK
```
```
If the optional parameters are specified, set the URC
indication configurations:
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
```

##### 17 SYSINFO_SYSTEMO_MODE_LTE

<sub_mode> Integer type. Network sub mode.
0 SYSINFO_SYSTEMO_SUBMODE_NO_SERVICE
1 SYSINFO_SYSTEMO_SUBMODE_GSM
3 SYSINFO_SYSTEMO_SUBMODE_GSM_EGPRS
5 SYSINFO_SYSTEMO_SUBMODE_UTRAN_HSDPA
6 SYSINFO_SYSTEMO_SUBMODE_UTRAN_HSUPA
7 SYSINFO_SYSTEMO_SUBMODE_UTRAN_HSPA
8 SYSINFO_SYSTEMO_SUBMODE_UTRAN
17 SYSINFO_SYSTEMO_SUBMODE_EUTRAN
"smsfull" SMS storage full indication. Default: OFF. If this configuration
is ON, present:
+QIND: "smsfull",<storage>
<storage> String type. Internal storage mode.
"ME" UE mode
"SM" SIM card mode
"smsincoming" Incoming message indication. Default: ON.
Related URCs list:
+CMTI, +CMT, +CDS
"act" Indication of network access technology change. Default:
OFF. If this configuration is ON, present:
+QIND: "act",<actvalue>
<actvalue> is string format. Values:
"LTE"
"UNKNOWN"
URC examples:
+QIND: "act","LTE"
+QIND: "act","UNKNOWN"
Description of "act":

1. If module does not register on network, <actvalue> is
    "UNKNOWN".
2. If this configuration is ON, the URC of "act" is reported
    immediately. Only when the network access technology
    changes, a new URC is reported.
"sqi" The URC of reference signal receiving power, reference
signal receiving quality and signal to interference plus
noise ratio. Default is OFF. If <enable> is set to ON, the
following URC is reported:
+QIND: "SQI",<RSRP>,<RSRQ>,<SINR>
<RSRP> Integer type. Reference signal receiving
power. Unit: dBm.
<RSRQ> Integer type. Reference signal receiving
quality. Unit: dB.
<SINR> Integer type. Signal to interference plus noise


ratio. Unit: dB.

<enable> Integer type. Whether URC indication is enabled.
0 OFF
1 ON
<save_to_nvram> Integer type. Whether to save configuration into NVM.
0 Do not save
1 Save
<err> Error codes, see Chapter 12.4.

### 4.4. AT+QCFG Extended Configuration Settings

#### AT+QCFG Extended Configuration Settings

```
Test command
AT+QCFG=?
```
```
Response
...
+QCFG: "urc/ri/ring",(list of supported <typeri>s),(list of
supported<pulse_duration>s),(list of supported
<pulse_count>s)
+QCFG: "urc/ri/smsincoming",(list of supported
<typeri>s),(list of supported <pulse_duration>s),(list of
supported <pulse_count>s)
+QCFG: "urc/ri/other",(list of supported <typeri>s),(list of
supported <pulse_duration>s),(list of supported <pulse_
count>s)
+QCFG: "urc/ri/level",(list of supported <level>s)
+QCFG: "cmux/urcport",(list of supported <URC_port>s)
+QCFG: "cmux/baudratework",(list of supported <enabl
e>s)
+QCFG: "urc/delay",(list of supported <time>s)
+QCFG: "urc/cache",(list of supported <enable>s)
+QCFG: "urc/port",(list of supported <URC_port_value>
s)
+QCFG: "risignaltype",(list of supported <RI_signal_typ
e>s)
+QCFG: "roamservice",(list of supported <roam_mode>
s),(list of supported <effect>s)
+QCFG: "band",(list of supported <bandval>s),(list of
supported <ltebandval>s)
+QCFG: "nwoptmz/acq",(list of supported <flag>s),(list of
supported <interval>s)
+QCFG: " usbnet",(list of supported <net>s)
```

#### 4.4.1. AT+QCFG="urc/ri/ring" Set RI Behavior When RING URC is Presented

The ring indicator is active low. AT+QCFG="urc/ri/ring" specifies the RI behavior when URC RING is
presented to indicate an incoming call.

The sum of <active_duration> and <inactive_duration> determines the RING indication interval of an
incoming call.

```
+QCFG: "aprstlevel",(list of supported <level>s)
+QCFG: "modemrstlevel",(list of supported <level>s)
+QCFG: "ntp",(list of supported <cnt>s),(list of supported
<interval>s)
+QCFG: "ledmode",(list of supported <mode>s)
+QCFG: "nat",(list of supported <nat>s)
+QCFG: "netmaskset",(list of supported <enable>s),<net
mask>
+QCFG: "ppp/termframe",(list of supported <flag>s)
+QCFG: "rf/tuner_cfg",(list of supported <index>s), (list
of supported <lte bands>s)
+QCFG:"tcp/windowsize",(list of supported <buffer>s),(lis
t of supported <window_size>s)
+QCFG: "TCP/SendMode",(list of supported <mode>s)
+QCFG: "fast/poweroff",(list of supported <n>s)
+QCFG: "fota/cid",(list of supported <contextID>s)
+QCFG: "qcautoconnect",(list of supported
<data_format>s)
+QCFG: "sms/listmsgmap",(list of supported <msgtype>s),
(list of supported <msgmap>s)
+QCFG: "sms/MeNum",(list of supported <value>s)
```
```
OK
Maximum Response Time 3 00 ms
```
#### AT+QCFG="urc/ri/ring" Set RI Behavior When RING URC is Presented

```
Write Command
AT+QCFG="urc/ri/ring"[,<typeri>[,<pul
se_duration>[,<pulse_count>]]]
```
```
Response
If the optional parameters are omitted, query the current
setting:
+QCFG: "urc/ri/ring",<typeri>,<pulse_duration>,<pulse
_count>
```
```
OK
```
```
If any of the optional parameters is specified, set the RI
```

#### Parameter

#### 4.4.2. AT+QCFG="urc/ri/smsincoming" Set RI Behavior When Incoming SMS URCs

#### are Presented

This command specifies the RI (ring indicator) behavior when the following URCs are presented: +CMTI,
+CMT, +CDS and +CBM.

```
behavior when RING URC is presented:
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
```
```
Characteristics This command takes effect immediately.^
The configuration is saved automatically.
```
```
<typeri> String type. RI behavior when an URC is presented.
"off" No change. Ring indicator remains inactive.
"pulse" Pulse. Pulse width is determined by <pulse_duration>.
<pulse_duration> Integer type. Set pulse width. Range: 1–2000. Default value: 120. Unit: ms.
This parameter is only valid when <typeri> is "pulse". If this parameter is not
needed, it can be set as null.
<pulse_count> Integer type. Pulse count. It is valid only when <typeri> is "pulse". Range: 1–5.
Default value: 1. Interval between two pulses is equal to <pulse_duration>.
<err> Error codes. For more details, see Chapter 12.4.
```
#### AT+QCFG="urc/ri/smsincoming" Set RI Behavior When Incoming SMS URCs are

#### Presented

```
Write Command
AT+QCFG="urc/ri/smsincoming"[,<typ
eri>[,<pulse_duration>[,<pulse_count
>]]]
```
```
Response
If the optional parameters are omitted, query the current
setting:
+QCFG: "urc/ri/smsincoming",<typeri>,<pulse_duratio
n>,<pulse_count>
```
```
OK
```
```
If any of the optional parameters is specified, set the RI
behavior when incoming SMS URCs are presented:
OK
Or
```

#### Parameter

#### 4.4.3. AT+QCFG="urc/ri/other" Set RI Behavior When Other URCs are Presented

This command specifies the RI (ring indicator) behavior when other URCs are presented.

##### ERROR

```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
```
```
Characteristics
This command takes effect immediately.
The configuration is saved automatically.
```
```
<typeri> String type. RI behavior when URCs are presented.
"off" No change. Ring indicator remains inactive.
"pulse" Pulse. Pulse width is determined by <pulse_duration>.
<pulse_duration> Integer type. Set pulse width. Range: 1–2000. Default value: 120.
Unit: ms. This parameter is only valid when <typeri> is "pulse".
<pulse_count> Integer type. Pulse count. It is valid only when <typeri> is "pulse".
Range: 1–5. Default value: 1. Interval between two pulses are equal to
<pulse_duration>.
<err> Error codes. For more details, see Chapter 12.4.
```
#### AT+QCFG="urc/ri/other" Set RI Behavior When Other URCs are Presented

```
Write Command
AT+QCFG="urc/ri/other"[,<typeri>[,<p
ulse_duration>[,<pulse_count>]]]
```
```
Response
If the optional parameters are omitted, query the current
setting:
+QCFG: "urc/ri/other",<typeri>,<pulse_duration>,
<pulse_count>
```
```
OK
```
```
If the optional parameters are specified, set the RI behavior
when other URCs are presented:
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
```

#### Parameter

#### 4.4.4. AT+QCFG="urc/ri/level" Set Default Level of MAIN_RI Pin

This command sets the default level of MAIN_RI pin.

#### Parameter

```
Maximum Response Time 300 ms
```
```
Characteristics
This command takes effect immediately.
The configuration is saved automatically.
```
```
<typeri> String type. RI behavior when URCs are presented。
"off" No change. Ring indicator keeps inactive.
"pulse" Pulse. Pulse width is determined by <pulse_duration>.
<pulse_duration> Integer type. Set the width of pulse. Range: 1–2000. Default value: 120. Unit: ms.
It is valid only when <typeri> is "pulse".
<pulse_count> Integer type. Pulse count. It is valid only when <typeri> is "pulse". Range: 1–5.
Default value: 1. Interval between two pulses is equal to <pulse_duration>.
<err> Error codes. For more details, see Chapter 12.4.
```
#### AT+QCFG="urc/ri/level" Set Default Level of MAIN_RI Pin

```
Write Command
AT+QCFG="urc/ri/level"[,<level>]
```
```
Response
If the optional parameter is omitted, query the current setting:
+QCFG: "urc/ri/level",<level>
```
```
OK
```
```
If the optional parameter is specified, set the default level of
RI pin
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
```
```
Characteristics
This command takes effect immediately.
The configuration is saved automatically.
```
```
<level> Integer type. Default level of RI pin.
```

#### 4.4.5. AT+QCFG="cmux/urcport" Set Output Port of CMUX URCs

This command sets the output port of CMUX URCs or queries the current setting.

#### Parameter

#### 4.4.6. AT+QCFG="cmux/baudratework" Set Baud Rate in CMUX Mode.............................

This Command sets the baud rate in CMUX mode.

```
0 low level
1 high level
<err> Integer type. Error code. For more details, see Chapter 12.4.
```
#### AT+QCFG="cmux/urcport" Set Output Port of CMUX URCs

```
Write Command
AT+QCFG="cmux/urcport"[,<URC_p
ort>]
```
```
Response
If the optional parameter is omitted, query the current setting:
+QCFG: "cmux/urcport",<URC_port>
```
```
OK
```
```
If the optional parameter is specified, set the output port of
CMUX URCs:
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configuration is saved automatically.
```
```
<URC_port> Integer type. Output port of CMUX URCs.
0 All ports
1 Virtual port 1
2 Virtual port 2
3 Virtual port 3
4 Virtual port 4
<err> Integer type. Error code. For more details, see Chapter 12.4.
```

#### Parameter

#### 4.4.7. AT+QCFG="urc/delay" Set Delay Time of URC Indication

This command sets the delay time of URC indication starting from the end of RI pulse.

#### AT+QCFG="cmux/baudratework" Set Baud Rate Configuration in CMUX Mode

```
Write Command
AT+QCFG="cmux/baudratework"[,<e
nable>]
```
```
Response
If the optional parameter is omitted, query the current setting:
+QCFG: "cmux/baudratework"[,<enable>]
```
```
OK
```
```
If the optional parameter is specified, set the baud rate in
CMUX mode:
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
```
```
Characteristics
This command takes effect immediately.
The configuration is saved automatically.
```
```
<enable> Integer type. Whether it is allowed to set the CMUX baud rate.
0 Not allowed
1 Allowed
<err> Integer type. Error code. For more details, see Chapter 12.4.
```
#### AT+QCFG="urc/delay" Set Delay Time URC Indication Output

```
Write Command
AT+QCFG="urc/delay"[,<time>]
```
```
Response
If the optional parameter is omitted, query the current setting:
+QCFG: "urc/delay",<time>
```
```
OK
```
```
If the optional parameter is specified, set the delay time of
URC indication starting from the end of RI pulse:
OK
Or
```

#### Parameter

#### 4.4.8. AT+QCFG="urc/cache" Enable/Disable URC Cache

#### Parameter

##### ERROR

```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
```
```
Characteristics
This command takes effect immediately.
The configuration is saved automatically.
```
```
<time> Integer type. Delay time of URC indication starting from the end of RI pulse: It is
valid only when the RI pulse is greater than or equal to 0. Range: 0–120.
Unit: millisecond. Default value: 0, which means no delay.
<err> Error codes. For more details, see Chapter 12.4.
```
#### AT+QCFG="urc/cache" Enable/Disable URC Cache

```
Write Command
AT+QCFG="urc/cache"[,<enable>]
```
```
Response
If the optional parameter is omitted, query the current setting:
+QCFG: "urc/cache",<enable>
```
```
OK
```
```
If the optional parameter is specified, enable/disable URC
cache:
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
```
```
Characteristics
This command takes effect immediately.
The configuration is not saved.
```
```
<enable> Integer type. Whether to enable/disable URC cache.
0 Disable
```

#### Example

AT+QCFG="urc/cache"
+QCFG: "urc/cache",0 //Disable URC cache.

OK
AT+QCFG="urc/cache",1 //Enable URC cache.
OK
AT+QCFG="urc/cache"
+QCFG: "urc/cache",1

OK

//Make a call and send two messages to the module.
AT+QCFG="urc/cache",0 //Disable URC cache.
OK

#### 4.4.9. AT+QCFG="urc/port" Set URC Output Port

#### Parameter

```
1 Enable
<err> Error codes. For more details, see Chapter 12.4.
```
#### AT+QCFG="urc/port" Set URC Output Port

```
Write Command
AT+QCFG="urc/port"[,<URC_port_va
lue>]
```
```
Response
if the optional parameter is omitted, query the current setting:
+QCFG: "urc/port",<URC_port_value>
```
```
OK
```
```
If the optional parameter is specified, set URC output port:
OK
Or
ERROR
Maximum Response Time 300 ms
```
```
Characteristics This command takes effect immediately.^
The configuration is not saved.
```
```
<URC_port_value> String type .URC output port.
"usbat" USB AT port
```

#### Example

##### AT+QCFG=?

+QCFG: "urc/port",("usbat","usbmodem","uart1","all")

OK
AT+QCFG="urcport" //Query the current URC output port.
+QCFG: "urc/port","usbat"

OK
AT+QCFG="urc/port","usbmodem" //Set the URC output port to USB Modem port.
OK
AT+QCFG="urc/port"
+QCFG: "urc/port","usbmodem"

OK

#### 4.4.10. AT+QCFG="risignaltype" RI Signal Output Carrier

This command specifies the RI (ring indicator) signal output carrier.

```
"usbmodem" USB Modem port
"uart1" UART port
"all" all port
```
#### AT+QCFG="risignaltype" RI Signal Output Carrier

```
Write Command
AT+QCFG="risignaltype",[<RI_signal_
type>]
```
```
Response
If the optional parameter is omitted, query the current
setting:
+QCFG: "risignaltype",<RI_signal_type>
```
```
OK
```
```
If the optional parameter is specified, set the RI signal output
carrier:
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
```

#### Parameter

#### Example

AT+QCFG="risignaltype"
+QCFG: "risignaltype","respective"

OK
AT+QCFG="risignaltype","physical"
OK
AT+QCFG="risignaltype"
+QCFG: "risignaltype","physical"

OK

#### 4.4.11. AT+QCFG="roamservice" Enable/Disable Roaming Service

This command enables or disables the roaming service.

```
Characteristics This command takes effect immediately.^
The configuration is saved automatically.
```
```
<RI_signal_type> String type. RI signal output carrier.
"respective" Ring indicator is sent over the port through which URC is presented
and the port can be queried with AT+QURCCFG="urcport". See
Chapter 2.24 for details about the command.
If URC is presented on UART port, it is a physical ring line.
If URC is presented on USB modem port, it is a virtual ring line.
If URC is presented on USB AT port, no ring line for USB AT port
because it does not support ring lines.
"physical" No matter which port URC is presented on, the RI pin will have a
ring jump.
<err> Error codes. For more details, see Chapter 12.4.
```
#### AT+QCFG="roamservice" Enable/Diable Roaming Service

```
Write Command
AT+QCFG="roamservice"[,<roam_mo
de>[,<effect>]]
```
```
Response
If the optional parameters are omitted, query the current
setting:
+QCFG: "roamservice",<roam_mode>
```
```
OK
```

#### Parameter

#### 4.4.12. AT+QCFG="band" Configure Band

This command specifies the preferred frequency bands for UE network searching.

```
If any of the optional parameters are specified,
enable/disable the roaming service:
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
```
```
Characteristics
<effect> determines when will the command take effect.
The configuration is saved automatically.
```
```
<roam_mode> Integer type. Whether to enable/disable roaming service.
1 Disable roaming service
2 Enable roaming service
255 Auto mode
<effect> Integer type. When the command take effect.
0 Take effect after UE reboots
1 Take effect immediately
<err> Error codes. For more details, see Chapter 12.4.
```
#### AT+QCFG="band" Configure Band

```
Write Command
AT+QCFG="band"[,<bandval>,<lteban
dval>
```
```
Response
If the optional parameters are omitted, query the current
setting:
+QCFG: "band",<bandval>,<ltebandval>
```
```
OK
```
```
If the optional parameters are specified, set the band:
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
```

#### Parameter

#### 4.4.13. AT+QCFG="nwoptmz/acq" Save Searched Cell Database to NV Automatically

This command saves the searched sell database to NV automatically.

```
Maximum Response Time 300 ms
```
```
Characteristics
This command takes effect immediately.
The configuration is saved automatically.
```
```
<bandval> A hexadecimal value that specifies the LTE frequency bands.
0 No change
<ltebandval> A hexadecimal value that specifies the LTE frequency band. If it is set to 0 or
0x40000000, it means not to change LTE frequency band.
(e.g.: 0x15 = 0x1 (LTE B1) + 0x4 (LTE B3) + 0x10 (LTE B5)
0 No change
0x1 (CM_BAND_PREF_LTE_EUTRAN_BAND1) LTE B1
0x2 (CM_BAND_PREF_LTE_EUTRAN_BAND2) LTE B2
0x4 (CM_BAND_PREF_LTE_EUTRAN_BAND3) LTE B3
0x8 (CM_BAND_PREF_LTE_EUTRAN_BAND4) LTE B4
0x10 (CM_BAND_PREF_LTE_EUTRAN_BAND5) LTE B5
0x40 (CM_BAND_PREF_LTE_EUTRAN_BAND7) LTE B7
0x80 (CM_BAND_PREF_LTE_EUTRAN_BAND8) LTE B8
0x800 (CM_BAND_PREF_LTE_EUTRAN_BAND12) LTE B12
0x1000 (CM_BAND_PREF_LTE_EUTRAN_BAND13) LTE B13
0x2000 (CM_BAND_PREF_LTE_EUTRAN_BAND14) LTE B14
0x 20000 (CM_BAND_PREF_LTE_EUTRAN_BAND1 8 ) LTE B1 8
0x 40000 (CM_BAND_PREF_LTE_EUTRAN_BAND1 9 ) LTE B1 9
0x80000 (CM_BAND_PREF_LTE_EUTRAN_BAND20) LTE B20
0x 100 0000 (CM_BAND_PREF_LTE_EUTRAN_BAND2 5 ) LTE B2 5
0x 200 0000 (CM_BAND_PREF_LTE_EUTRAN_BAND2 6 ) LTE B2 6
0x8000000 (CM_BAND_PREF_LTE_EUTRAN_BAND28) LTE B28
0x 200000000 (CM_BAND_PREF_LTE_EUTRAN_BAND 34 ) LTE B34
0x 2000000000 (CM_BAND_PREF_LTE_EUTRAN_BAND 38 ) LTE B3 8
0x 4000000000 (CM_BAND_PREF_LTE_EUTRAN_BAND 39 ) LTE B3 9
0x 8000000000 (CM_BAND_PREF_LTE_EUTRAN_BAND 40 ) LTE B 40
0x 10000000000 (CM_BAND_PREF_LTE_EUTRAN_BAND 41 ) LTE B 41
0x 20000000000000000 (CM_BAND_PREF_LTE_EUTRAN_BAND66) LTE B66
0 x400000000000000000 (CM_BAND_PREF_LTE_EUTRAN_BAND71) LTE B71
0x7FFFFFFFFFFFFFFF(CM_BAND_PREF_ANY) Any frequency band
<err> Error codes. For more details, see Chapter 12.4.
```

#### Parameter

1. If <flag> is set to 0, it will disable saving of searched cell database to NV automatically and the
    database will be cleared.
2. If this function is enabled, the module prefers to select one cell in database to register after
    power-on. If all cells in the database are exhausted and the module still fails to register to the
    network, the module will search the network by scanning the full frequency.

#### Example

AT+QCFG="nwoptmz/acq",1, 3600
OK

AT+QCFG="nwoptmz/acq"
+QCFG: **“** nwoptmz/acq **”** ,1, 3600

OK

#### AT+QCFG="nwoptmz/acq" Save Searched Cell Database to NV Automatically

```
Write Command
AT+ QCFG="nwoptmz/acq"[,<flag>,<interval>]
```
```
Response
If the optional parameters are omitted, query the
current setting:
+QCFG: "nwoptmz/acq",<flag>,<interval>
```
```
OK
```
```
If any of the optional parameter is specified,
enable/disable saving of the searched cell
database to NV automatically:
OK
Or
ERROR
```
```
Characteristics
This command takes effect immediately.
The configuration is saved automatically.
```
```
<flag>
Integer type. Enable/Disable saving of searched cell database to NV automatically.
0 Disable
1 Enable
<interval> Integer type. Interval for checking for database changes. Range: 60–16777200.
Default value: 3 600. Unit: second.
```
##### NOTE


#### 4.4.14. AT+QCFG="usbnet" Set Network Card Interface Type

This command sets the network card interface type.

#### Parameter

#### 4.4.15. AT+QCFG="aprstlevel" Set AP Dump Level

This command queries or sets AP dump level.

#### AT+QCFG="usbnet" Set Network Card Interface Type

```
Write Command
AT+QCFG="usbnet"[,<net>]
```
```
Response
If the optional parameter is omitted, query the current setting:
+QCFG: "usbnet",<net>
```
```
OK
```
```
If the optional parameter is specified, set the network card
interface type:
OK
Or
ERROR
```
```
If error is related to ME functionality:
+CME ERROR:<err>
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect after rebooting;
The configuration is saved automatically.
```
```
<net> Integer type. Network card interface type.
1 ECM interface
3 RNDIS interface
<err> Error codes. For more details, see Chapter 12.4.
```
#### AT+QCFG="aprstlevel" Set AP Dump Level

```
Write Command
AT+QCFG="aprstlevel"[,<level>]
```
```
Response
If the optional parameter is omitted, query the current setting:
+QCFG: "aprstlevel",<level>
```
```
OK
```
```
If the optional parameter is specified, set AP dump level:
```

#### Parameter

```
<level> Integer type. AP dump level.
0 Open AP dump. Module reboots and enters dump mode when an AP dump happens.
1 Close AP dump. Module only reboots when an AP dump happens.
```
#### 4.4.16. AT+QCFG="modemrstlevel" Set CP Dump Level

This command queries or sets CP (i.e., Modem) dump level.

#### Parameter

```
<level> Integer type. CP dump level.
0 Open CP dump. Module reboots and enters dump mode when a CP dump happens.
1 Close CP dump. Module only reboots when a CP dump happens.
```
```
To ensure the module enters dump mode when either AP dump or CP dump happens, you must reboot
the module after both AT+QCFG="aprstlevel",0 and AT+QCFG="modemrstlevel",0 are executed
```
##### OK

```
Or
ERROR
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect after the module is rebooted.
The configuration is saved automatically.
```
#### AT+QCFG="modemrstlevel" Set CP Dump Level

```
Write Command
AT+QCFG="modemrstlevel"[,<level>]
```
```
Response
If the optional parameter is omitted, query the current setting:
+QCFG: "modemrstlevel",<level>
```
```
OK
```
```
If the optional parameter is specified, set CP dump level:
OK
Or
ERROR
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect after the module is rebooted.
The configuration is saved automatically.
```
##### NOTE


```
successfully.
```
#### 4.4.17. AT+QCFG="ntp" Set Maximum NTP Re-transmission Count and Interval

This command sets the maximum re-transmission times and the interval of NTP.

#### Parameter

#### Example

AT+QCFG="ntp" //Query the current setting.
+QCFG: "ntp",3,15

OK
AT+QCFG="ntp",5,20 //Set NTP re-transmission count and interval.
OK
AT+QCFG="ntp" //Query the current setting.
+QCFG: "ntp",5,20

OK

#### AT+QCFG="ntp" Set Maximum NTP Re-transmission Count and Interval

```
Write Command
AT+QCFG="ntp"[,<cnt>,<interval>]
```
```
Response
If the optional parameters are omitted, query the current
setting:
+QCFG: "ntp",<cnt>,<interval>
```
```
OK
```
```
If the optional parameters are specified, set the maximum
re-transmission count and the interval for NTP:
OK
Or
ERROR
Maximum Response Time 3 00 ms
```
```
Characteristic
The command takes effect immediately.
The configurations are saved automatically.
```
```
<cnt> Integer type. NTP re-transmission count. Range: 1 – 10. Default value: 3.
<interval> Integer type. NTP re-transmission interval. Range: 5–60. Default value: 15.
```

#### 4.4.18. AT+QCFG="ledmode" Set NET_STATUS Output Mode

This command queries or sets the output mode of NET_STATUS pin.

#### Parameter

### Example

AT+QCFG="ledmode",1 //Output high level when attaching to the network and low level in other
cases.
OK
AT+QCFG="ledmode" //Query the current setting.
+QCFG: "ledmode",1

#### AT+QCFG="ledmode" Set NET_STATUS Output Mode

```
Write Command
AT+QCFG="ledmode"[,<mode>]
```
```
Response
If the optional parameter is omitted, query the current setting:
+QCFG: "ledmode",<mode>
```
```
OK
```
```
If the optional parameter is specified, set the output mode of
NET_STATUS pin:
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
```
```
Characteristic
The command takes effect immediately.
The configuration is saved automatically.
```
```
<mode> Integer type. Output mode of NET_STATUS pin.
0 Flicker mode.
Network searching: LED is on for 200 ms (high level); LED is off for 1800 ms (low
level)
Idle: LED is on for 1800 ms (high level); LED is off for 200 ms (low level)
Data transmission: LED is on for 125 ms (high level); LED is off for 125 ms (low level)
1 Output high level when attaching to the network and low level in other cases.
2 Custom setting of output mode of NET_STATUS pin.
<err> Integer type. Error code. For more details, see Chapter 12.4.
```

##### OK

#### 4.4.19. AT+QCFG="nat" Set NIC Working Mode

This command sets the NIC working mode.

#### Parameter

#### Example

AT+QCFG="nat",1 //Set NIC working mode to NIC mode.
OK

#### 4.4.20. AT+QCFG="netmaskset" Enable/Disable Customized Netmask

This command enables or disables setting of the netmask.

#### AT+QCFG="nat" Set NIC Working Mode

```
Write Command
AT+QCFG="nat"[,<nat>]
```
```
Response
If the optional parameter is omitted, query the current setting:
+QCFG: "nat",<nat>
```
```
OK
```
```
If the optional parameter is specified, set the NIC working
mode:
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect after rebooting;
The configuration is saved automatically.
```
```
<nat> Integer type. NIC working mode.
0 Routing mode
1 NIC mode
<err> Integer type. Error code. For more details, see Chapter 12.4.
```

#### Parameter

#### Example

AT+QCFG="netmaskset" //Query the current setting.
+QCFG: "netmaskset",0 //Customized netmask is disabled.

OK
AT+QCFG="netmaskset",1,"255.255.255.0" //Enable customized netmask and set netmask.
OK
AT+QCFG="netmaskset"
+QCFG: "netmaskset",1

OK
AT+QCFG="netmaskset", 0 //Disable customized netmask and set netmask.
OK

#### 4.4.21. AT+QCFG="ppp/termframe" Enable/Disable PPP TERM Frame Sending

This command enables/disables the PPP TERM frame sending when PPP connection is terminated by

#### AT+QCFG="netmaskset" Enable/Disable Customized Netmask

```
Write Command
AT+QCFG="netmaskset"[,<enable
>[,<netmask>]]
```
```
Response
If the optional parameters are omitted, query the current setting:
+QCFG: "netmaskset",<enable>
```
```
OK
```
```
If any of the optional parameters is specified, enable or disable
customized netmask:
OK
Or
ERROR
Maximum Response Time 300 ms
```
```
Characteristic
This command takes effect after reconnecting the network card.
The configurations is saved automatically.
```
```
<enable> Integer type. Enable/disable customized netmask.
0 Disable. Netmask is set by the rule inside the module.
1 Enable. Netmask is set by <netmask>.
<netmask> String type. Customized netmask. It is valid only when <enable>=1.
Example: "255.255.255.0".
```

the module.

#### Parameter

```
If AT+QPPPDROP hangs up the PPP connection with a TERM frame, module sends the TERM frame
to MCU regardless of whether <flag> is 0 or 1.
```
#### Example

AT+QCFG="ppp/termframe",1 //Enable PPP TERM frame sending:
OK
AT+QCFG="ppp/termframe" //Query the current setting.
+QCFG: "ppp/termframe",1

OK

#### AT+QCFG="ppp/termframe" Enable/Disable PPP TERM Frame Sending

```
Write Command
AT+QCFG="ppp/termframe"[,<flag>]
```
```
Response
If the optional parameter is omitted, query the current setting:
+QCFG: "ppp/termframe",<flag>
```
```
OK
```
```
If the optional parameter is specified, enable/disable PPP
TERM frame sending:
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CME ERROR:<err>
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect after rebooting.
The configuration is saved automatically.
```
<flag> Integer type. Enable/disable TERM frame sending when PPP connection is terminated by the
module.
0 Disable
1 Enable
<err> Integer type. Error code. For more details, see Chapter 12.4.

##### NOTE


#### 4.4.22. AT+QCFG="rf/tuner_cfg" Set Mapping Between RF Tuner and RF Bands

This command sets the mapping between RF tuner and RF bands.

#### Parameter

1. For EG800Q series module, FEM5 corresponds to pin 105 and FEM6 corresponds to pin 104.
2. For EG91xQ family modules, FEM5 corresponds to pin 76 and FEM6 corresponds to pin 77.

#### Example

AT+QCFG="rf/tuner_cfg" //Query the current setting.
+QCFG: "rf/tuner_cfg",0,"1,2,3,4,8,25,39"
"rf/tuner_cfg",1,"5,18,19,20,26"
"rf/tuner_cfg",2,"12,13,28"
"rf/tuner_cfg",3,"7,38,40,41"

#### AT+QCFG="rf/tuner_cfg" Set Mapping Between RF Tuner and RF Bands

```
Write Command
AT+QCFG="rf/tuner_cfg"[,<index>,<lt
ebands>]
```
```
Response
If the optional parameters are omitted, query the current
setting:
+QCFG: "rf/tuner_cfg",<index>,<ltebands>
```
```
OK
```
```
If the optional parameters are specified, set the mapping
between RF tuner and RF bands:
OK
Or
ERROR
Maximum Response Time 300 ms
```
```
Characteristics
This command takes effect after rebooting.
The configuration is saved automatically.
```
```
<index> Integer type. Pin level status. Range: 0– 3
0 FEM6 at low level, FEM5 at low level
1 FEM6 at low level, FEM5 at high level
2 FEM6 at high level, FEM5 at low level
3 FEM6 at high level, FEM5 at high level
<ltebands> String type. LTE bands, separated by commas. (e.g., "1,3,5", etc.)
```
##### NOTE


##### OK

//Set the LTE bands, i.e., FEM 6 at high level and FEM 5 at low level.
AT+QCFG="rf/tuner_cfg",2,"2,12,13,25,28"
OK
AT+QCFG="rf/tuner_cfg" //Query the current setting.
+QCFG: "rf/tuner_cfg",0,"1,3,4,8,39"
"rf/tuner_cfg",1,"5,18,19,20,26"
"rf/tuner_cfg",2,"2,12,13,25,28"
"rf/tuner_cfg",3,"7,38,40,41"

OK

#### 4.4.23. AT+QCFG="tcp/windowsize" Set TCP Window Available Size

This command sets the available size of TCP window when sending/receiving data.

#### Parameter

#### AT+QCFG="tcp/windowsize" Set TCP Window Available Size

```
Write Command
AT+QCFG="tcp/windowsize",<buffer
>[,<window_size>]
```
```
Response
If the optional parameter is omitted, query the current setting:
+QCFG: "tcp/windowsize",<buffer>,<window_size>
```
```
OK
```
```
If the optional parameter is specified, set TCP window
available size:
OK
Or
ERROR
Maximum Response Time 3 00 ms
```
```
Characteristic
The command takes effect immediately.
The configuration is not saved.
```
```
<buffer> Integer type. Set whether to receive or sending buffer size.
0 Receive buffer size
1 Send buffer size
<window_size> Integer type. Available TCP window size. Range: 16–100. Default value: 16.
<err> Error codes. For more details, see Chapter 12.4.
```

#### 4.4.24. AT+QCFG="TCP/SendMode" Set TCP Sending Mode

This command configures TCP sending mode.

#### Parameter

#### Example

AT+QCFG="TCP/SendMode"
+QCFG: "TCP/SendMode",0

OK
AT+QCFG="TCP/SendMode",1
OK

#### AT+QCFG="TCP/SendMode" Set TCP Sending Mode

```
Write Command
AT+QCFG="TCP/SendMode"[,<mode>]
```
```
Response
If optional parameter is omitted, query the current setting:
+QCFG: "TCP/SendMode",<mode>
```
```
OK
```
```
If the optional parameter is specified, set TCP sending
mode:
OK
Or
ERROR
```
```
If error is related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 3 00 ms
```
```
Characteristic
The command takes effect immediately.
The configuration is not saved.
```
```
<mode> Integer type. Set when to send SEND OK.
0 SEND OK is sent immediately after TCP socket sends data from serial port.
1 SEND OK is sent after receiving an ACK from the remote TCP socket.
2 <SocketID>,SEND OK is sent after receiving an ACK from the remote TCP socket.
<err> Error codes. For more details, see Chapter 12.4.
```

#### 4.4.25. AT+QCFG="fast/poweroff" Enable/Disable Fast Power-Off

This command enables or disables fast power-off.

#### Parameter

#### Example

AT+QCFG="fast/poweroff" //Query the current setting.
+QCFG: "fast/poweroff",0

OK
AT+QCFG="fast/poweroff",1 //Enable fast power-off.
OK
AT+QCFG="fast/poweroff"
+QCFG: "fast/poweroff",1 //Fast power-off is enabled.

OK

#### AT+QCFG="fast/poweroff" Enable/Disable Fast Power-Off

```
Write Command
AT+QCFG="fast/poweroff"[,<n>]
```
```
Response
If the optional parameter is omitted, query the current setting:
+QCFG: "fast/poweroff",<n>
```
```
OK
```
```
If the optional parameter is specified, enable/disable fast
power-off:
OK
Or
ERROR
Maximum Response Time 300 ms
```
```
Characteristics
This command takes effect immediately.
The configuration is saved automatically.
```
```
<n> Integer type. Enable/disable fast power-off.
0 Disable
1 Enable
<err> Integer type. Error code. For more details, see Chapter 12.4.
```

#### 4.4.26. AT+QCFG="fota/cid" Set PDP Context ID for FOTA Download

This command sets the PDP context ID for FOTA download.

#### Parameter

#### 4.4.27. AT+QCFG="qcautoconnect" Disable/enable Auto Connect Function in ECM Mode

This command disable/enable the auto connect function (data call) when USB mode is ECM.

#### AT+QCFG="fota/cid" Set PDP Context ID for FOTA Download

```
Write Command
AT+QCFG="fota/cid"[,<contextID>]
```
```
Response
If the optional parameter is omitted, query the current
setting:
+QCFG: "fota/cid",<contextID>
```
```
OK
```
```
If the optional parameter is specified, set PDP context ID for
FOTA download:
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
```
```
Characteristics
This command takes effect immediately.
The configuration is not saved.
```
```
<contextID> Integer type. Context ID. Range: 1–15. Default value: 1.
<err> Integer type. Error code. For more details, see Chapter 12.4.
```
#### AT+QCFG="qcautoconnect" Set Auto Connect Function in ECM Mode

```
Write Command
AT+QCFG="qcautoconnect"[,<dat
a_format>]
```
```
Response
If the optional parameter is omitted, query the current setting:
+QCFG: "qcautoconnect",<data_format>
```
```
OK
```

#### Parameter

#### 4.4.28. AT+QCFG="sms/listmsgmap" List Message Map

This command lists the message map with <msgtype> in the memory storage <mem1> specified by
AT+CPMS.

#### Parameter

```
If the optional parameter is specified, set the auto connect
function in ECM mode:
OK
Or
ERROR
Maximum Response Time 300 ms
```
```
Characteristics /
```
```
<data_format> Integer type. Disable/enable auto connect function in ECM mode.
0 Disable auto connect
1 Enable auto connect
```
#### AT+QCFG="sms/listmsgmap" List Message Map

```
Write Command
AT+QCFG="sms/listmsgmap",<msgt
ype>
```
```
Response
+QCFG: "sms/listmsgmap",<msgtype>,<msgmap>
```
```
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
Characteristics /
```
```
<msgtype> String type. Message type.
"REC UNREAD" Received unread messages
"REC READ" Received read messages
"STO UNSENT" Stored unsent messages
"STO SENT" Stored sent messages
<msgmap> String type. Bit map of all messages in the storage specified by <mem1> of AT+CPMS.
```

#### Example

##### AT+CPMS?

##### +CPMS: "ME",0, 255 ,"ME",0, 255 ,"ME",0, 255

##### OK

AT+QCFG="sms/listmsgmap","REC UNREAD" //List the received unread message map.
+QCFG: "sms/listmsgmap","REC UNREAD","000F5B0000"

OK

#### 4.4.29. AT+QCFG="sms/MeNum" Set the Number of Short Messages Stored by ME

This command sets the number of short messages that can be stored by ME.

#### Parameter

```
If the bit is 1, it means the message is on the type specified by <msgtype>. If the bit is
0, it means the message is not on the type specified by <msgtype>;
The position of the bit in bit map specified by <msgtype> indicates the message index
in the storage specified by <mem1> of AT+CPMS.
<err> Integer type. Error code. For more details, see Chapter 12.4.
```
#### AT+QCFG="sms/MeNum" Set the Number of Short Messages Stored by ME

```
Write Command
AT+QCFG="sms/MeNum"[,<value>]
```
```
Response
If the optional parameter is omitted, query the current setting:
+QCFG: "sms/MeNum",<value>
```
```
OK
```
```
If the optional parameter is specified, set the number of
messages stored by ME.
OK
Or
ERROR
Maximum Response Time 300 ms
```
```
Characteristic
The command takes effect after the module is rebooted.
The configuration is saved after power-off.
```
```
<value> Integer type. Number of messages stored by ME. Range: 0–255. Default value: 255.
```

#### Example

AT+QCFG="sms/MeNum" //Query the setting of sms/MeNum.
+QCFG: "sms/MeNum",255

OK


## 5 (U)SIM Related Commands

### 5.1. AT+CIMI Request International Mobile Subscriber Identity (IMSI)

This command requests the International Mobile Subscriber Identity (IMSI) which is intended to permit the
TE to identify the individual SIM card or active application in the UICC (GSM or USIM) that is attached to
MT.

#### Parameter

#### Example

##### AT+CIMI

460023210226023 //Query IMSI number of (U)SIM which is attached to ME
OK

#### AT+CIMI Request International Mobile Subscriber Identity (IMSI)

```
Test Command
AT+CIMI=?
```
```
Response
OK
Execution Command
AT+CIMI
```
```
Response
TA returns <IMSI> for identifying the individual (U)SIM
attached to ME.
<IMSI>
```
##### OK

```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
Characteristic /
Reference
3GPP TS 27.00 7
```
```
<IMSI> International Mobile Subscriber Identity (string without double quotes)
<err> Error codes. For more details, see Chapter 12.4.
```

### 5.2. AT+CLCK Facility Lock

This command locks, unlocks or interrogates a MT or a network facility <fac>. It can be aborted when
network facilities are being set or interrogated. The factory default password of PF, PN, PU, PP and PC
lock is "12341234". For Write Command, <passwd> is normally needed to do such actions. When
querying the status of network service (<mode>=2), the response line for ‘not active’ case (<status>=0)
should be returned only if service is not active for any <class>.

#### Parameter

#### AT+CLCK Facility Lock

```
Test Command
AT+CLCK=?
```
```
Response
+CLCK: (list of supported <fac>s)
```
##### OK

```
Write Command
AT+CLCK=<fac>,<mode>[,<passwd>[
,<class>]]
```
```
Response
If <mode> is not 2 and the command is executed
successfully:
OK
```
```
If <mode>=2 and command is executed successfully:
+CLCK: <status>[,<class>]
[+CLCK: <status>[,<class>]]
[...]
```
```
OK
Maximum Response Time 5 s
```
```
Characteristic
The command takes effect immediately.
The configuration is saved automatically.
Reference
3GPP TS 27.00 7
```
```
<fac> String type.
"SC" (U)SIM (lock SIM/UICC card installed in the currently selected card slot)
(SIM/UICC requests password at MT power-up and when this lock command
issued).
<mode> Integer type. Network service status.
0 Unlock
1 Lock
2 Query status
<passwd> String type. Password.
```

#### Example

AT+CLCK="SC",2 //Query the status of (U)SIM card.
+CLCK: 0 //The (U)SIM card is unlocked (OFF).

OK
AT+CLCK="SC",1," 1234 " //Lock (U)SIM card, and the password is 1234.
OK
AT+CLCK="SC",2 //Query the status of (U)SIM card.
+CLCK: 1 //The (U)SIM card is locked (ON).

OK
AT+CLCK="SC",0," 1234 " //Unlock (U)SIM card. The password is 1234.
OK

### 5.3. AT+CPIN Enter PIN

This command is used to enter a password or queries if the module requires a password before it can be
operated. The password may be (U)SIM PIN, (U)SIM PUK, PH-SIM PIN, etc.

Read Command returns an alphanumeric string indicating whether or not some password is required.

TA stores the password, such as (U)SIM PIN, (U)SIM PUK, etc., which is necessary for operating. If the
PIN is to be entered twice, the TA automatically repeats the PIN. If no PIN request is pending, no action is
taken and an error message +CME ERROR is returned to TE.

If the PIN required is (U)SIM PUK or (U)SIM PUK2, the second pin is required. This second pin
<new_pin> is used to replace the old pin in the (U)SIM.

```
<class> Integer type.
1 Voice
2 Data
4 FAX
7 All telephony except SMS
8 Short message service
16 Data circuit synchronization
32 Data circuit asynchronization
<status> Integer type. Current status of the specified <class>.
0 Off
1 On
```

#### Parameter

#### Example

//Enter PIN.
AT+CPIN?
+CPIN: SIM PIN //MT is waiting for SIM PIN to be given.

OK
AT+CPIN=1234 //Enter PIN.
OK

+CPIN: READY
AT+CPIN? //PIN has already been entered.

#### AT+CPIN Enter PIN

```
Test Command
AT+CPIN=?
```
```
Response
OK
Read Command
AT+CPIN?
```
```
Response
+CPIN: <code>
```
```
OK
Write Command
AT+CPIN=<pin>[,<new_pin>]
```
```
Response
OK
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 5 s
```
```
Characteristics
The command takes effect immediately.
The configuration is saved automatically.
Reference
3GPP TS 27.007
```
```
<code> String without double quotes. The password that the module requires.
READY MT is not pending for any password
SIM PIN MT is waiting for SIM PIN to be given
SIM PUK MT is waiting for SIM PUK to be given
SIM PIN2 MT is waiting for SIM PIN2 to be given
SIM PUK2 MT is waiting for SIM PUK2 to be given
<pin> String type. Password. If the requested password is a PUK, such as (U)SIM PUK1,
PH-FSIM PUK or another password, then <pin> must be followed by <new_pin>.
<new_pin> String type. New password required if the requested code is a PUK.
```

##### +CPIN: READY

##### OK

//Enter PUK and PIN.
AT+CPIN?
+CPIN: SIM PUK //MT is waiting for SIM PUK to be given.

K
AT+CPIN=" 26601934 "," 1234 " //Enter PUK and new PIN password.
OK

CPIN: READY
AT+CPIN?
+CPIN: READY //PUK has already been entered.

OK

### 5.4. AT+CPWD Change Password

This command sets a new password for the facility lock function defined by AT+CLCK.

This Test Command returns a list of pairs that are present the available facilities and the maximum length
of their passwords.

#### AT+CPWD Change Password

```
Test Command
AT+CPWD=?
```
```
Response
+CPWD: ("SC",8)
```
```
OK
Write Command
AT+CPWD=<fac>,<oldpwd>,<newpw
d>
```
```
Response
OK
```
```
Maximum Response Time 5 s
```
```
Characteristics
The command takes effect immediately.
The configuration is saved automatically.
Reference
3GPP TS 27.007
```

#### Parameter

#### Example

##### AT+CPIN?

##### +CPIN: READY

##### OK

AT+CPWD="SC","1234","4321" //Change (U)SIM card password to " 4321 ".
OK
//Restart the module or re-activate the SIM card.
AT+CPIN? //Query PIN code is locked.
+CPIN: SIM PIN

OK
AT+CPIN="4321" //PIN must be entered to define a new password "4321".
OK

+CPIN: READY

### 5.5. AT+CSIM Generic (U)SIM Access

This command allows a direct control of the (U)SIM installed in the selected card slot by a distant
application on the TE. The TE keeps the processing (U)SIM information within the frame specified with
GSM/UMTS.

```
<fac> String type. The facility locks.
"SC" (U)SIM (lock SIM/UICC card) (SIM/UICC asks for password at MT power-up
and when this lock command is issued)
<pwdlength> Integer type. Maximum length of the password.
<oldpwd> String type. Password specified for the facility from the user interface or with
command.
<newpwd> String type. New password.
```
#### AT+CSIM Generic (U)SIM Access

```
Test Command
AT+CSIM=?
```
```
Response
OK
Write Command
AT+CSIM=<length>,<command>
```
```
Response
+CSIM: <length>,<response>
```
```
OK
Or
```

#### Parameter

### 5.6. AT+CRSM Restricted (U)SIM Access

This command offers easy and limited access to the (U)SIM database. It transmits the (U)SIM command
number <command> and its required parameters to the MT.

##### ERROR

```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configuration is saved automatically.
Reference
3GPP TS 27.007
```
```
<length> Integer type. Length of <command> or <response> string.
<command> Command transferred by the MT to the (U)SIM in the format described in 3GPP TS
51.011.
<response> Response to the command transferred by the (U)SIM to the MT in the format
described in 3GPP TS 51.011.
<err> Error codes. For more details, see Chapter 12.4.
```
#### AT+CRSM Restricted (U)SIM Access

```
Test Command
AT+CRSM=?
```
```
Response
OK
Write Command
AT+CRSM=<command>[,<fileld>[,<P1
>,<P2>,<P3>[,<data>][,<pathld>]]]
```
```
Response
+CRSM: <sw1>,<sw2>[,<response>]
```
```
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
```
```
Characteristic
The command takes effect immediately.
The configuration is saved automatically.
```

#### Parameter

### 5.7. AT+QCCID Show ICCID

This command returns the ICCID (Integrated Circuit Card Identifier) number of (U)SIM card.

```
Reference
3GPP TS 27.007
```
```
<command> Integer type. (U)SIM command number.
176 READ BINARY
178 READ RECORD
192 GET RESPONSE
214 UPDATE BINARY
220 UPDATE RECORD
242 STATUS
<fileId> Integer type. Identifier of an elementary data file on (U)SIM, if used by
<command>.
<P1>, <P2>, <P3> Integer type. Parameters passed on by the MT to the (U)SIM. These
parameters are mandatory for every command, except GET RESPONSE and
STATUS. The values are described in 3GPP TS 51.011.
<data> Information to be written to the (U)SIM (hexadecimal character format; refer
to AT+CSCS).
<pathId> String type. Path of an elementary file on a SIM/UICC in hexadecimal format.
<sw1>, <sw2> Integer type. Information from the (U)SIM about the execution of the actual
command. These parameters are delivered to the TE in both cases, on
successful or failed execution of the command.
<response> Response of a successful completion of the command previously issued
(hexadecimal character format; refer to AT+CSCS). STATUS and GET
RESPONSE return data, which gives information about the current
elementary data field. The information includes the type of file and its size
(refer to 3GPP TS 51.011). After READ BINARY, READ RECORD or
RETRIEVE DATA command, the requested data will be returned.
<response> is not returned after a successful UPDATE BINARY, UPDATE
RECORD or SET DATA command.
<err> Error codes. For more details, see Chapter 12.4.
```
#### AT+QCCID Show ICCID

```
Test Command
AT+QCCID=?
```
```
Response
OK
Execution Command Response
```

#### Parameter

#### Example

AT+QCCID //Query ICCID of the (U)SIM card.
+QCCID: 89860025128306012474

OK

### 5.8. AT+QPINC Display PIN Remainder Counter........................................................................

This command queries the number of attempts left to enter the password of (U)SIM PIN/PUK.

##### AT+QCCID +QCCID: <ICCID>

##### OK

```
Or
ERROR
Maximum Response Time 300 ms
Characteristics /
```
```
<ICCID> String without double quotes. ICCID (Integrated Circuit Card Identifier) number of the
(U)SIM card.
```
#### AT+ QPINC Display PIN Remainder Counter

```
Test Command
AT+QPINC=?
```
```
Response
+QPINC: (list of supported <facility>s)
```
```
OK
Read Command
AT+QPINC?
```
```
Response
+QPINC: "SC",<PIN_counter>,<PUK_counter>
+QPINC: "P2",<PIN_counter>,<PUK_counter>
```
```
OK
Write Command
AT+QPINC=<facility>
```
```
Response
+QPINC: <facility>,<PIN_counter>,<PUK_counter>
```
```
OK
Or
ERROR
```

#### Parameter

### 5.9. AT+QINISTAT Query Initialization Status of (U)SIM Card

This command queries the initialization status of (U)SIM card.

#### Parameter

```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
Characteristics /
```
```
<facility> String type.
"SC" (U)SIM PIN
"P2" (U)SIM PIN2
<PIN_counter> Integer type. Number of attempts left to enter PIN. Maximum value: 3.
<PUK_counter> Integer type. Number of attempts left to enter PUK. Maximum value: 10.
<err> Error codes. For more details, see Chapter 12.4.
```
#### AT+QINISTAT Query Initialization Status of (U)SIM Card

```
Test Command
AT+QINISTAT=?
```
```
Response
+QINISTAT: (list of supported <status>s)
```
```
OK
Execution Command
AT+QINISTAT
```
```
Response
+QINISTAT: <status>
```
```
OK
Maximum Response Time 300 ms
Characteristics /
```
```
<status> Integer type. Initialization status of (U)SIM card. Actual value is the sum of several of the
following four states (e.g. 7 = 1 + 2 + 4 means CPIN READY & SMS DONE & PB DONE).
Default: 7.
0 Initial state
1 CPIN READY. Operation like PIN locking/unlocking is allowed
2 SMS DONE. SMS initialization completed
```

### 5.10. AT+QSIMDET (U)SIM Card Detection..................................................................................

This command enables (U)SIM card hot-swap function. (U)SIM card is detected by GPIO interrupt. The
level of (U)SIM card detection pin should also be set when (U)SIM card is inserted.

#### Parameter

1. Hot-swap function is invalid if the configured value of <insert_level> is inconsistent with that of in
    hardware design.
2. Hot-swap function takes effect after the module is restarted.

```
4 PB DONE. Phonebook initialization completed
```
#### AT+QSIMDET (U)SIM Card Detection

```
Test Command
AT+QSIMDET=?
```
```
Response
+QSIMDET: (list of supported <enable>s),(list of supported
<insert_level>s)
```
```
OK
Read Command
AT+QSIMDET?
```
```
Response
+QSIMDET: <enable>,<insert_level>
```
```
OK
Write Command
AT+QSIMDET=<enable>,<insert_level
>
```
```
Response
OK
Or
ERROR
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect after module is rebooted.
The configuration is saved automatically.
```
```
<enable> Integer type. Enables or disables (U)SIM card detection.
0 Disable
1 Enable
<insert_level> Integer type. The level of (U)SIM detection pin when a (U)SIM card is inserted.
0 Low level
1 High level
```
##### NOTE


#### Example

AT+QSIMDET=1,0 //Set (U)SIM card detection pin level as low when (U)SIM card is inserted.
OK
<Remove (U)SIM card> //Remove (U)SIM card
+CPIN: NOT READY
<Insert (U)SIM card> //Insert (U)SIM card.
+CPIN: READY //PIN1 of (U)SIM card is unlocked.

### 5.11. AT+QSIMSTAT (U)SIM Card Insertion Status Report

This command queries (U)SIM card insertion status or determines whether to report (U)SIM card insertion
status.

#### Parameter

#### AT+QSIMSTAT (U)SIM Card Insertion Status Report

```
Test Command
AT+QSIMSTAT=?
```
```
Response
+QSIMSTAT: (list of supported <enable>s)
```
```
OK
Read Command
AT+QSIMSTAT?
```
```
Response
+QSIMSTAT: <enable>,<inserted_status>
```
```
OK
Write Command
AT+QSIMSTAT=<enable>
```
```
Response
OK
Or
ERROR
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configuration is saved automatically.
```
```
<enable> Integer type. Enable or disable (U)SIM card insertion status report. If it is enabled,
the URC +QSIMSTAT: <enable>,<inserted_status> will be reported, when (U)SIM
card is removed or inserted.
0 Disable
1 Enable
<inserted_status> Integer type. (U)SIM card is inserted or removed. This argument can not be set.
0 Removed
1 Inserted
```

#### Example

AT+QSIMSTAT? //Query (U)SIM card insertion status.
+QSIMSTAT: 0,1

OK
AT+QSIMDET=1,0
OK
AT+QSIMSTAT=1 //Enable (U)SIM card insertion status report.
OK
AT+QSIMSTAT?
+QSIMSTAT: 1,1

OK
<Remove (U)SIM card>
+QSIMSTAT : 1,0 //Report on (U)SIM card insertion status: removed.

CPIN: NOT READY
AT+QSIMSTAT?
+QSIMSTAT: 1,0

OK
<Insert (U)SIM card>
+QSIMSTAT: 1,1 //Report on (U)SIM card insertion status: inserted.

+CPIN: READY

### 5.12. AT+CCHO Open Logical Channel

This command opens a logical channel of (U)SIM card.

```
2 Unknown, before (U)SIM initialization
```
#### AT+CCHO Open Logical Channel

```
Test Command
AT+CCHO=?
```
```
Response
OK
Write Command
AT+CCHO=<dfname>
```
```
Response
<sessionID>
```
```
OK
Or
```

#### Parameter

```
The logical channel number is contained in the CLASS byte of an APDU command, and implicitly
contained in all APDU commands sent to a UICC. MT manages the logical channel part of the APDU
CLASS byte and to ensures that the chosen logical channel is relevant for <sessionID> indicated in
the AT command. See 3GPP TS 31.101 [65] for further information on logical channels in APDU
command protocol.
```
#### Example

AT+CCHO=? //Test command.
OK
AT+CCHO="A0000000871002FF86FFFF89FFFFFFFF" //<dfname> is made up of AID strings.
+CCHO: 1 //The session ID is 1.

OK

### 5.13. AT+CGLA UICC Logical Channel Access

This command accesses a UICC logical channel.

##### ERROR

```
Maximum Response Time 3 00 ms
```
```
Characteristics
The command takes effect immediately.
The configuration is not saved.
```
```
<dfname> String type. All selectable applications in the UICC are referenced by a DF name
coded on 1 to 16 bytes.
<sessionID> Integer type. A session ID to be used to target a specific application on the smart
card using logical channel mechanism.
```
#### AT+CGLA UICC Logical Channel Access

```
Test Command
AT+CGLA=?
```
```
Response
OK
Write Command
AT+CGLA=<sessionID>,<length>,
<command>
```
```
Response
+CGLA: <length>,<response>
```
##### NOTE


#### Parameter

#### Example

AT+CGLA=? //Test command.
OK
AT+CGLA=1,14,"00A40804022F00" //The command is 00A40804022F00.
+CGLA: 4,"6121" //The length is 4, the response is 6121.

OK

### 5.14. AT+CCHC Close Logical Channel

This command closes a logical channel of (U)SIM card with the given <sessionID>.

##### OK

```
Or
ERROR
Maximum Response Time 3 00 ms
```
```
Characteristics
The command takes effect immediately.
The configuration is not saved.
```
```
<sessionID> Integer type. Identifier of the session for sending the APDU commands to the
UICC. The commands to the UICC when targeting applications on the smart card
using a logical channel other than the default channel (channel "0").
<length> Integer type. Length of the characters that are sent to TE in <command> or
<response> (Twice the actual length of the command or response).
<command> Command passed on by the MT to the UICC in the format described in 3GPP TS
31.101 [65] (hexadecimal character format; refer to AT+CSCS)
<response> Response to the command passed on by the UICC to the MT in the format as
described in 3GPP TS 31.101 [65] (hexadecimal character format; refer to
AT+CSCS).
```
#### AT+CCHC Close Logical Channel

```
Test Command
AT+CCHC=?
```
```
Response
OK
Write Command
AT+CCHC=<sessionID>
```
```
Response
OK
Or
ERROR
```

#### Parameter

#### Example

AT+CCHC=? //Test command.
OK
AT+CCHC=1 //Close logical channel: 1.
OK

```
Maximum Response Time 3 00 ms
```
```
Characteristics
The command takes effect immediately.
The configuration is not saved.
```
```
<sessionID> Inter type. A session ID to be used to target a specific application on the smart card
using logical channels mechanism.
```

## 6 Network Service Commands

### 6.1. AT+COPS Operator Selection

This command returns the current operators and their status, and allows setting automatic or manual
network selection.

The Test Command returns a set of five parameters, each representing an operator present in the
network. Any of the formats may be unavailable and should be an empty field. The list of operators will be
ordered as follows: home network, networks referenced in (U)SIM and other networks.

The Read Command returns the current mode and the currently selected operator. If no operator is
selected, <format>, <oper> and <Act> are omitted.

This Write Command forces an attempt to select and register the GSM/UMTS network operator. If the
selected operator is not available, no other operator will be selected (except <mode>=4). The format of
selected operator name will apply to other Read Commands (AT+COPS?).

#### AT+COPS Operator Selection

```
Test Command
AT+COPS=?
```
```
Response
+COPS: [list of supported (<stat>,long alphanumeric <
oper>,short alphanumeric <oper>,numeric <oper> [,<
Act>])s][,,(list of supported <mode>s),(list of supported<f
ormat>s)]
```
```
OK
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Read Command
AT+COPS?
```
```
Response
+COPS: <mode>[,<format>[,<oper>][,<Act>]]
```
```
OK
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
```

#### Parameter

```
Write Command
AT+COPS=<mode>[,<format>[,<oper
>[,<Act>]]]
```
```
Response
OK
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 180 s, determined by network.
Characteristics The command takes effect immediately.
Reference
3GPP TS 27.007
```
<stat> Integer type.
0 Unknown
1 Operator available
2 Current operator
3 Operator forbidden
<oper> Operator in format as per<format>.
<mode> Integer type. Determines whether <oper> is present or not.
0 Automatic mode. <oper> field is omitted
1 Manual operator selection. <oper> field is present and <Act> optionally
2 Manually deregister from network
3 Set only <format> (for AT+COPS? Read Command), and do not attempt
registration/deregistration (<oper> and <Act> fields are ignored). This value is
invalid in Read Command response.
4 Manual/automatic selection. <oper> field is present. If manual selection fails,
automatic mode (<mode>=0) is entered
<format> Integer type. Indicates the format of <oper>.
0 Long format alphanumeric <oper> up to 16 characters
1 Short format alphanumeric <oper>
2 Numeric <oper>. GSM location area identification number
<Act> Integer type. Access technology selected. Values 3, 4, 5 and 6 occur only in the Read
Command response while MS is in data service state and is not intended for AT+COPS
Write Command.
0 GSM
2 UTRAN
3 GSM W/EGPRS
4 UTRAN W/HSDPA
5 UTRAN W/HSUPA
6 UTRAN W/HSDPA and HSUPA
7 E-UTRAN
100 CDMA


#### Example

AT+COPS=? //List all current network operators.
+COPS: (1,"CHN-UNICOM","UNICOM","46001",2),(1,"CHN-UNICOM","UNICOM","46001",0),(2,"CH
N-UNICOM","UNICOM","46001",7),(1,"46011","46011","46011",7),(3,"CHINA MOBILE","CMCC","46
000",0),,(0,1,2,3,4),(0,1,2)

OK
AT+COPS? //Query the currently selected network operator.
+COPS: 0,0,"CHN-UNICOM", 7

OK

### 6.2. AT+CREG Network Registration Status

This Read Command returns the status of result code presentation and an integer <stat> that shows
whether the network has currently indicated the registration of the ME. Location information elements
<LAC> and <ci> are returned only when <n>=2 and ME is registered on the network.

This Write Command controls the presentation of an unsolicited result code +CREG: <stat> when <n>=1
and there is a change in the ME network registration status.

<err> Error codes. For more details, see Chapter 12.4.

#### AT+CREG Network Registration Status

```
Test Command
AT+CREG=?
```
```
Response
+CREG: (list of supported <n>s)
```
```
OK
Read Command
AT+CREG?
```
```
Response
+CREG: <n>,<stat>[,<LAC>,<ci>[,<Act>]]
```
```
OK
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Write Command
AT+CREG[=<n>]
```
```
Response
OK
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configuration is not saved.
```

#### Parameter

#### Example

##### AT+CREG=1

##### OK

+CREG: 1 //URC reports that ME has registered on network.
AT+CREG=2 //Activate extended URC mode.
OK

+CREG: 1,"D50 9 ","80D413D", 7 //URC reports that operator has found location area code
and cell ID.

```
Reference
3GPP TS 27.007
```
```
<n> Integer type. Whether to enable related registration network.
0 Disable network registration URC
1 Enable network registration URC +CREG: <stat>
2 Enable network registration URC with location information:
+CREG: <stat>[,<LAC>,<ci>[,<Act>]]
<stat> Integer type. Registration network status.
0 Not registered. ME is not currently searching a new operator to register to
1 Registered, home network
2 Not registered, but ME is currently searching a new operator to register to
3 Registration denied
4 Unknown
5 Registered, roaming
<LAC> String type. Two-byte location area code in hexadecimal format.
<ci> String type. 16 - bit (GSM) or 28-bit (UMTS/LTE) cell ID in hexadecimal format.
<Act> Integer type. Access technology selected.
0 GSM
2 UTRAN
3 GSM W/EGPRS
4 UTRAN W/HSDPA
5 UTRAN W/HSUPA
6 UTRAN W/HSDPA and HSUPA
7 E-UTRAN
<err> Error codes. For more details, see Chapter 12.4.
```

### 6.3. AT+CSQ Signal Quality Report

The command returns the received signal strength <rssi> and the channel bit error rate <ber>.

The Test Command returns values supported by MT.

The Execution Command returns received signal strength indication <rssi> and channel bit error rate
<ber> from MT.

#### Parameter

#### AT+CSQ Signal Quality Report

```
Test Command
AT+CSQ=?
```
```
Response
+CSQ: (list of supported <rssi>s),(list of supported <ber>s)
```
```
OK
Execution Command
AT+CSQ
```
```
Response
+CSQ: <rssi>,<ber>
```
##### OK

```
If there is error related to MT functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
Characteristics /
Reference
3GPP TS 27.007
```
<rssi> Integer type. Received signal strength indication.
0 - 113 dBm or less
1 - 111 dBm
2 – 30 - 109 dBm to -53 dBm
31 - 51 dBm or greater
99 Not known or not detectable
100 - 116 dBm or less
101 - 115 dBm
102...190 - 114 dBm to -26 dBm
191 - 25 dBm or greater
199 Not known or not detectable
100 – 199 Extended to be used in TD-SCDMA indicating received signal code
power (RSCP)


#### Example

##### AT+CSQ=?

##### +CSQ: (0-31,99),(0-7,99)

##### OK

##### AT+CSQ

+CSQ: 28, 99 //Received signal strength indication is 28 dBm and channel bit error rate is 99 dBm.

OK

### 6.4. AT+CPOL Preferred Operator List

This command edits and queries the list of preferred operators.

<ber> Integer type. Channel bit error rate (in percent).
0 – 7 As RxQual values in the table in 3GPP TS 45.008 subclause 8.2.4
99 Not known or not detectable

#### AT+CPOL Preferred Operator List

```
Test Command
AT+CPOL=?
```
```
Response
+CPOL: (list of supported <index>s),(list of supported
<format>s)
```
```
OK
Read Command
AT+CPOL?
```
```
Response
Query the list of preferred operators:
+CPOL: <index>,<format>,<oper>[,<GSM>,<GSM_comp
act>,<UTRAN>,<E-UTRAN>]
[+CPOL: <index>,<format>,<oper>[,<GSM>,<GSM_comp
act>,<UTRAN>,<E-UTRAN>
... ]
```
```
OK
Write Command
AT+CPOL=<index>[,<format>[,<oper
>[<GSM>,<GSM_compact>,<UTRAN>
,<E-UTRAN>]]]
```
```
Response
Edit the list of preferred operators:
OK
Or
ERROR
```
```
If <index> is given but <oper> is omitted, the entry is
deleted.
```

#### Parameter

```
The access technology selection parameters <GSM>, <GSM_compact>, <UTRAN> and <E-UTRAN>
are required for (U)SIM cards or UICC’s containing PLMN selector with access technology.
```
### 6.5. AT+COPN Read Operator Names

This command returns the list of supported operators from MT. Each operator code <numericn> that has
an alphanumeric equivalent <alphan> in the MT memory is returned.

```
Maximum Response Time 300 ms
Characteristics The command takes effect immediately.
Reference
3GPP TS 27.007
```
```
<index> Integer type. The operator order number on the (U)SIM preferred operator list.
<format> Integer type. Format of <oper>.
0 Long format alphanumeric <oper>
1 Short format alphanumeric <oper>
2 Numeric <oper>
<oper> String type. Operation Name. <format> indicates if the format is alphanumeric or
numeric (see AT+COPS).
<GSM> Integer type. GSM access technology.
0 Access technology is not selected
1 Access technology is selected
<GSM_compact> Integer type. GSM compact access technology.
0 Access technology is not selected
1 Access technology is selected
<UTRAN> Integer type. UTRAN access technology.
0 Access technology is not selected
1 Access technology is selected
<E-UTRAN> Integer type. E-UTRAN access technology.
0 Access technology is not selected
1 Access technology is selected
```
##### NOTE


#### Parameter

### 6.6. AT+CTZU Automatic Time Zone Update

This command enables/disables automatic time zone update via NITZ.

#### AT+COPN Read Operator Names

```
Test Command
AT+COPN=?
```
```
Response
OK
Execution Command
AT+COPN
```
```
Response
+COPN: <numeric1>,<alpha1>
[+COPN: <numeric2>,<alpha2>
... ]
```
```
OK
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time Depends on the number of operator names.
Characteristics /
Reference
3GPP TS 27.007
```
<numericn> String type. Operator in numeric format (see AT+COPS).
<alphan> String type. Operator in long alphanumeric format (see AT+COPS).
<err> Error codes. For more details, see Chapter 12.4.

#### AT+CTZU Automatic Time Zone Update

```
Test Command
AT+CTZU=?
```
```
Response
+CTZU: (list of supported <enable>s)
```
```
OK
Write Command
AT+CTZU=<enable>
```
```
Response
OK
Or
ERROR
Read Command
AT+CTZU?
```
```
Response
+CTZU: <enable>
```

#### Parameter

<enable> Integer type. Mode of automatic time zone update.
0 Disable automatic time zone update via NITZ.
1 Enable automatic time zone update via NITZ
3 Enable automatic time zone update via NITZ and update LOCAL time to RTC

#### Example

AT+CTZU? //Read command.
+CTZU: 0

OK
AT+CTZU=? //Test command.
+CTZU: (0,1,3)

OK
AT+CTZU=1 //Enable automatic time zone update.
OK
AT+CTZU?
+CTZU: 1

OK

### 6.7. AT+CTZR Time Zone Reporting

This command controls the time zone chang event reporting. If reporting is enabled, the MT returns the
unsolicited result code +CTZV: <tz> or +CTZE: <tz>,<dst>,<time> whenever the time zone is changed.

##### OK

```
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configuration is saved automatically.
Reference
3GPP TS 27.007
```
#### AT+CTZR Time Zone Reporting

```
Test Command
AT+CTZR=?
```
```
Response
+CTZR: (list of supported <reporting>s)
```

#### Parameter

#### Example

##### AT+CTZR=2

##### OK

##### OK

```
Write Command
AT+CTZR=<reporting>
```
```
Response
OK
Or
ERROR
Read Command
AT+CTZR?
```
```
Response
+CTZR: <reporting>
```
```
OK
Maximum Response Time 300 ms
```
```
Characteristics The command takes effect after module is rebooted.^
The configuration is saved automatically.
Reference
3GPP TS 27.007
```
```
<reporting> Integer type. Mode of time zone reporting.
0 Disable time zone change event reporting
1 Enable time zone change event reporting by URC +CTZV: <tz>
2 Enable extended time zone reporting by URC +CTZE: <tz>,<dst>,<time>
<tz> String type. Sum of the local time zone (difference between the local time and GMT is
expressed in quarters of an hour) plus daylight saving time. The format is "±zz",
expressed as a fixed width, two-digit integer with the range -48 to +56. To maintain a
fixed width, numbers in the range - 9 to +9 are expressed with a leading zero, e.g. "-09",
"+00" and "+09".
<dst> Integer type. Indicates whether <tz> includes daylight savings adjustment.
0 <tz> includes no adjustment for daylight saving time
1 <tz> includes +1 hour (equals 4 quarters in <tz>) adjustment for daylight saving
time
2 <tz> includes +2 hours (equals 8 quarters in <tz>) adjustment for daylight saving
time
<time> String type. Local time. The format is "YYYY/MM/DD,hh:mm:ss", expressed as
integers representing year (YYYY), month (MM), date (DD), hour (hh), minute (mm)
and second (ss). This parameter can be provided by the network when delivering time
zone information and will be present in the unsolicited result code of extended time
zone reporting if provided by the network.
```

##### AT+CTZR?

##### +CTZR: 2

##### OK

+CTZE: "+32",0," 2017 / 11 / 04 ,06:51:13" //Extended time zone and local time reporting by URC.

### 6.8. AT+QLTS Obtain the Latest Time Synchronized Through Network

This command obtains the latest time synchronized through network.

The Execution Command returns the latest time synchronized through the network.

#### Parameter

#### AT+QLTS Obtain the Latest Time Synchronized Through Network

```
Test Command
AT+QLTS=?
```
```
Response
+QLTS: (list of supported <mode>s)
```
```
OK
Execution Command
AT+QLTS
```
```
Response
+QLTS: <time>,<dst>
```
```
OK
Write Command
AT+QLTS=<mode>
```
```
Response
+QLTS: <time>,<dst>
```
```
OK
Or
ERROR
```
```
If there is error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
Characteristic The command takes effect immediately.
```
```
<mode> Integer type. Network time obtaining mode.
0 Query the latest time that has been synchronized through network
1 Query the current GMT time calculated from the latest time that has been
synchronized through network
2 Query the current LOCAL time calculated from the latest time that has been
```

```
If the time has not been synchronized through the network, the command will return a null time string
as +QLTS: "".
```
#### Example

AT+QLTS=? //Query the supported network time mode.
+QLTS: (0-2)

OK
AT+QLTS //Query the latest time synchronized through network.
+QLTS: "2017/ 10 /13,03:40:48+32,0"

OK
AT+QLTS=0 //Query the latest time synchronized through network. It performs the same
function as Execution Command AT+QLTS.
+QLTS: "2017/ 10 /13,03:40:48+32,0"

OK
AT+QLTS=1 //Query the current GMT time calculated from the latest time that has been
synchronized through network.
+QLTS: "2017/ 10 /13,03:41:22+32,0"

OK
AT+QLTS=2 //Query the current LOCAL time calculated from the latest time that has been
synchronized through network
+QLTS: "2017/01/13,11:41:23+32,0"

OK

```
synchronized through network
<time> String type. Format is "YYYY/MM/dd,hh:mm:ss±zz", where characters indicate year (two
last digits), month, day, hour, minutes, seconds and time zone (indicates the difference,
expressed in quarters of an hour, between the local time and GMT; Range: -48 to +48). E.g.
6th of May 2004, 22:10:00 GMT+2 hours equals to "04/05/06,22:10:00+08"
<dst> Integer type. Daylight saving time. Range: 0–2. Default: 0.
<err> Error codes. For more details, see Chapter 12.4.
```
##### NOTE


### 6.9. AT+QNWINFO Query Network Information

This command queries network information such as the selected access technology, operator and band.

#### Parameter

<Act> String type. Selected access technology.
"NONE"
"TDD LTE"
"FDD LTE"
<oper> String type. Operator in numeric format.
<band> String type. Selected band.
"LTE BAND 1"
"LTE BAND 2"
"LTE BAND 3"
"LTE BAND 4"
"LTE BAND 5"
"LTE BAND 7"
"LTE BAND 8"
"LTE BAND 12"
"LTE BAND 13"
"LTE BAND 14"
"LTE BAND 18"
"LTE BAND 19"
"LTE BAND 20"
"LTE BAND 25"
"LTE BAND 26"
"LTE BAND 28"
"LTE BAND 34"
"LTE BAND 38"
"LTE BAND 39"
"LTE BAND 40"

#### AT+QNWINFO Query Network Information

```
Test Command
AT+QNWINFO=?
```
```
Response
OK
Execution Command
AT+QNWINFO
```
```
Response
+QNWINFO: <Act>,<oper>,<band>,<channel>
```
##### OK

```
Maximum Response Time 300 ms
Characteristics /
```

##### "LTE BAND 41"

##### "LTE BAND 66"

##### "LTE BAND 71"

<channel> Integer type. Channel ID.

```
See the product specification of all applicable modules for specific frequency bands supported by each
module.
```
#### Example

##### AT+QNWINFO=?

##### OK

##### AT+QNWINFO

##### +QNWINFO: "FDD LTE",460 1 1,"LTE BAND 3",1650

##### OK

### 6.10. AT+QSPN Display Name of Registered Network

#### Parameter

#### AT+QSPN Display the Name of Registered Network

```
Test Command
AT+QSPN=?
```
```
Response
OK
Execution Command
AT+QSPN
```
```
Response
+QSPN: <FNN>,<SNN>,<SPN>,<alphabet>,<RPLMN>
```
```
OK
Maximum Response Time 3 00 ms
```
```
Characteristics /
```
```
<FNN> String type. Full network name.
<SNN> String type. Abbreviated network name.
<SPN> String type. Service provider name.
<alphabet> Integer type. Alphabet of full network names and abbreviated network name.
0 GSM 7-bit default alphabet
1 UCS2
```
##### NOTE


#### Example

AT+QSPN //Query the EONS information of RPLMN.
+QSPN: "CHN-UNICOM","UNICOM","",0,"46001"

OK

### 6.11. AT+QENG Switch on/off Engineering Mode

Engineering mode is designed to report the information of serving cells, neighbour cells and packet switch
parameters. The command switches on/off the mode.

```
<RPLMN> String type. Registered PLMN.
```
1. If <alphabet> is 0, <FNN> and <SNN> will be shown in GSM 7-bit default alphabet string.
2. If <alphabet> is 1, <FNN> and <SNN> will be shown in UCS2 hexadecimal string.

#### AT+QENG Switching on/off Engineering Mode

```
Test Command
AT+QENG=?
```
```
Response
+QENG: (list of supported <cell_type>s)
```
```
OK
AT+QENG="servingcell"
Query the information of serving cells
```
```
Response
+QENG: "servingcell",<state>,"LTE",<is_tdd>,<mcc>,
<mnc>,<cellID>,<earfcn>,<pcid>,<freq_band_ind>,<ul_b
andwidth>,<dl_bandwidth>,<tac>,<rsrp>,<rsrq>,<rssi>,
<sinr>,<s_rxlev>
```
```
OK
AT+QENG="neighbourcell"
Query the information of neighbour cells
```
```
Response
```
```
[+QENG: "neighbourcell intra","LTE",<earfcn>,<pcid>,
<rsrq>,<rsrp>,-,-,-,-,-,-
[...]]
```
```
Or
```
```
[+QENG: "neighbourcell inter","LTE",<earfcn>,<pcid>,
<rsrq>,<rsrp>,-,-,-,-,-,-
```
##### NOTE


#### Parameter

##### [...]]

##### OK

```
Maximum Response Time 300 ms
Characteristics /
```
<cell_type> String format. The information of different cells.
"servingcell" Information of 4G serving cells
"neighbourcell" Information of 4G neighbour cells
<state> String format. UE state.
"SEARCH" UE is searching but could not (yet) find a suitable 4G cell.
"LIMSRV" UE is camping on a cell but has not registered on the network.
"NOCONN" UE is camping on a cell and has registered on the network, and it
is in idle mode.
"CONNECT" UE is camping on a cell and has registered on the network, and
a call is in progress.
<is_tdd> String format. Communication mode.
"TDD" Time division duplex mode
"FDD" Frequency division duplex mode
<mcc> Integer type. Mobile country code (first part of PLMN code).
"-" Invalid
<mnc> Integer type. Mobile network code (second part of PLMN code).
"-" Invalid
<cellID> Hexadecimal format. Cell ID. Range: 0 - 0xFFFFFFF.
"-" Invalid
<earfcn> Integer type. E-UTRA-ARFCN of the scanned cell.
<pcid> Physical cell ID.
<freq_band_ind> Integer type. E-UTRA band (see 3GPP 36.101).
<ul_bandwidth> Integer type. UL bandwidth.
0 1.4 MHz
1 3 MHz
2 5 MHz
3 10 MHz
4 15 MHz
5 20 MHz
<dl_bandwidth> Integer type. DL bandwidth.
0 1.4 MHz
1 3 MHz
2 5 MHz
3 10 MHz


```
If “-” or - is returned, it indicates the parameter is invalid under current condition.
```
#### Example

AT+QENG="servingcell"
+QENG: "servingcell","SEARCH"

OK
AT+QENG="servingcell"
+QENG:
"servingcell","NOCONN","LTE","FDD",460,01,B57DE33,63,1850,3,5,5,B504,-85,-10,-54,17,38

OK

AT +QENG="neighbourcell" //Get neighbour cell information in LTE mode.
+QENG: "neighbourcell inter","LTE",575,-,-,-,-,-,-,-,-,-
+QENG: "neighbourcell inter","LTE",300,-,-,-,-,-,-,-,-,-
+QENG: "neighbourcell inter","LTE",500,-,-,-,-,-,-,-,-,-
+QENG: "neighbourcell inter","LTE",525,-,-,-,-,-,-,-,-,-
+QENG: "neighbourcell inter","LTE",1650,-,-,-,-,-,-,-,-,-
+QENG: "neighbourcell inter","LTE",1850,-,-,-,-,-,-,-,-,-
+QENG: "neighbourcell inter","LTE",2452,-,-,-,-,-,-,-,-,-
+QENG: "neighbourcell inter","LTE",3745,-,-,-,-,-,-,-,-,-

OK

```
4 15 MHz
5 20 MHz
<tac> Tracking area code (see 3GPP 23.003 Chapter 19.4.2.3).
<rsrp> Reference signal received power (see 3GPP 36.214 Chapter 5.1.1).
<rsrq> Reference signal received quality (see 3GPP 36.214 Chapter 5.1.2).
<rssi> Integer type. Received signal strength indication.
<sinr> Integer type. Logarithmic value of SINR. Range: - 20 to +30. Unit: dB.
<s_rxlev> Suitable receive level of Inter-frequency cell.
<arfcn> Integer type. Determines the ARFCN of the scanned cell. Range: 0-1023.
```
##### NOTE


### 6.12. AT+CIND Command of Control Indicator

#### Parameter

```
The values of <descr> and <ind> are described as follows:
```
```
<descr> <ind>
```
```
"call"
```
```
Call in progress indication.
0 No call in progress
1 Call in progress
```
```
"roam"
```
```
Roaming indicator.
0 Registered to home network or not registered
1 Registered to other network
```
```
"signal"
```
```
Signal quality indication.
0 – 5: Signal is divided into five levels. The larger the
value, the better the signal.
```
```
"service"
```
```
Service availability indicator.
0 Not registered on the network
1 Registered to home network
```
#### AT+CIND Command of Control Indicator

```
Test Command
AT+CIND=?
```
```
Response
+CIND:(<descr>,(list of supported <ind>s))[,(<descr>,(list of
supported <ind>s))[,...]]
OK
Read Command
AT+CIND?
```
```
Response
+CIND: <ind>[,<ind>[,...]]
```
```
OK
If error is related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 3 00 ms
Characteristics /
```
<descr> String type. Indicator description. See the following notes for details.
<ind> Integer types. Indicator. Related to the value of <descr>. see the following notes for
details.
<err> Error codes. For more details, see Chapter 12.4.

##### NOTE


```
"GPRS coverage"
```
```
PS domain registration indicator.
0 Not registered on PS domain
1 Registered on PS domain
```
```
"message"
```
```
Message received indicator.
0 Turn off
1 Turn on
```
#### Example

##### AT+CIND=?

+CIND: ("call",(0,1)),("roam",(0,1)),("signal",(0-5)),("service",(0,1)),("GPRS coverage",(0,1)),
("message",(0,1))

OK
AT+CIND?
+CIND: 0,0,3,1,1,0

OK


## 7 Dial Related Commands

### 7.1. ATD PPP Dial

This command sets up a PPP dial. Supplementary services can also be controlled with this command.

#### Parameter

```
This command can only be used in PPP.
```
#### Example

ATD*99# //Start PPP dialing.
OK

#### ATD PPP Dial

```
Execution Command
ATD<n>
```
```
Response
If a connection cannot be established:
NO CARRIER
```
```
If connection is successful:
CONNECT
Maximum Response Time 5 s, determined by network (AT+COLP=0).
Characteristics /
Reference
V.25ter
```
<n> String of dialing digits and optionally V.25ter modifiers.
Dialing digits: 0 – 9, * , #, +, A, B, C
Following V.25ter modifiers are ignored: ,(comma), T, P, !, W, @

##### NOTE


### 7.2. +++ Switch from Data Mode to Command Modeg

This command is only available when TA is in data mode. The "+++" character sequence causes the TA to
cancel the data flow over the AT interface and switch to command mode. This allows inputting AT
commands while maintaining the data connection with the remote server.

1. To prevent +++ escape sequence from being misinterpreted as data, the following sequence
    should be followed:
       ⚫ Do not input any character for at least 1s before and after inputting +++.
       ⚫ Input +++ within 1s, and wait until OK is returned.
       ⚫ Switch to command mode successfully; otherwise return to Step 1.
2. To return back to data mode from AT command mode, enter ATO.
3. Another way to change to command mode is through DTR level change, and please refer to AT&D
    command for details.

### 7.3. ATO Switch from Command Mode to Data Mode

This command resumes the connection and switches back to data mode from command mode.

#### +++ Switch from Data Mode to Command Mode

```
Execution Command
+++
```
```
Response
OK
Maximum Response Time 300 ms
Characteristics /
Reference
V.25ter
```
#### ATO Switch from Command Mode to Data Mode

```
Execution Command
ATO[n]
```
```
Response
If connection is not successfully resumed:
NO CARRIER
```
```
If connection is successfully resumed, TA returns to data
mode from command mode:
CONNECT <text>
Maximum Response Time 300 ms
```
##### NOTE


#### Parameter

```
When TA returns to data mode from command mode successfully, CONNECT <text> is returned. Note
that <text> outputs only when <value> is greater than 0 in ATX<value> parameter setting.
```
```
Characteristics /
Reference
V.25ter
```
<n> Integer type.
0 Switch from command mode to data mode

##### NOTE


## 8 Short Message Service Commands

### 8.1. AT+CSMS Select Message Service

This command selects messaging service <service> and returns the types of messages supported by the
ME.

#### Parameter

#### AT+CSMS Select Message Service

```
Test Command
AT+CSMS=?
```
```
Response
+CSMS: (list of supported <service>s)
```
```
OK
Read Command
AT+CSMS?
```
```
Response
+CSMS: <service>,<mt>,<mo>,<bm>
```
```
OK
Write Command
AT+CSMS=<service>
```
```
Response
+CSMS: <mt>,<mo>,<bm>
```
```
OK
```
```
If there is any error related to ME functionality:
+CMS ERROR: <err>
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configurations is saved automatically.
Reference
3GPP TS 27.005
```
```
<service> Integer type. Message service type.
0 3GPP TS 23.040 and 3GPP TS 23.041 (the syntax of SMS AT commands is
compatible with 3GPP TS 27.005 Phase 2 version 4.7.0; Phase 2+ features
that do not require new command syntax may be supported, e.g. correct
routing of messages with new Phase 2+ data coding schemes).
```

#### Example

AT+CSMS=? //Test command.
+CSMS: (0,1)

OK
AT+CSMS=1 //Set message service type to 1.
+CSMS: 1,1,1

OK
AT+CSMS? //Read command.
+CSMS: 1,1,1,1

OK

### 8.2. AT+CMGF Message Format

This command specifies the input and output format of the short messages. <mode> indicates the format
of messages used with Test, Read, Write and Execution Commands and unsolicited result codes resulting
from received messages.

The format of messages can be either PDU mode (entire TP data units used) or text mode (headers and
body of the messages given as separate parameters). Text mode uses the value of <chset> specified by
AT+CSCS command to inform the character set to be used in the message body in the TA-TE interface.

```
1 3GPP TS 23.040 and 3GPP TS 23.041 (the syntax of SMS AT commands is
compatible with 3GPP TS 27.005 Phase 2+ version; the requirement of
<service> setting 1 is mentioned under corresponding command
descriptions).
<mt> Integer type. Mobile terminated messages.
0 Type not supported
1 Type supported
<mo> Integer type. Mobile originated messages.
0 Type not supported
1 Type supported
<bm> Integer type. Broadcast type messages.
0 Type not supported
1 Type supported
<err> Error codes. For more details, see Chapter 12.5.
```

#### Parameter

### 8.3. AT+CSCA Service Center Address

This Write Command updates the SMSC address when mobile originated SMS are transmitted. In text
mode, the setting is used by Write Command. In PDU mode, setting is used by the same command, but
only when the length of the SMSC address is coded into the <pdu> parameter which equals to zero.

#### AT+CMGF Message Format

```
Test Command
AT+CMGF=?
```
```
Response
+CMGF: (list of supported <mode>s)
```
```
OK
Read Command
AT+CMGF?
```
```
Response
+CMGF: <mode>
```
```
OK
Write Command
AT+CMGF[=<mode>]
```
```
Response
TA sets parameter to denote I/O format of messages to use.
OK
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configuration is saved automatically.
Reference
3GPP TS 27.005
```
```
<mode> Integer type.
0 PDU mode
1 Text mode
```
#### AT+CSCA Service Center Address

```
Test Command
AT+CSCA=?
```
```
Response
OK
Read Command
AT+CSCA?
```
```
Response
+CSCA: <sca>,<tosca>
```
```
OK
Write Command
AT+CSCA=<sca>[,<tosca>]
```
```
Response
OK
```

#### Parameter

#### Example

AT+CSCA="+8613800210500",145 //Set SMSC address.
OK
AT+CSCA? //Query SMSC address.
+CSCA: "+8613800210500",145

OK

### 8.4. AT+CPMS Preferred Message Storage

This command selects the memory storages <mem1>, <mem2> and <mem3> to be used for reading,
writing, etc.

#### AT+CPMS Preferred Message Storage

```
Test Command
AT+CPMS=?
```
```
Response
+CPMS: (list of supported <mem1>s),(list of supported
<mem2>s),(list of supported <mem3>s)
```
```
OK
Read Command Response
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configuration is saved automatically.
Reference
3GPP TS 27.005
```
```
<sca> Service center address. 3GPP TS 24.011 RP SC address Address-Value field in string
format; BCD numbers (or GSM 7 bit default alphabet characters) are converted to
characters of the currently selected TE character set (see AT+CSCS in 3GPP TS
27.007). The type of address is given by <tosca>.
<tosca> Type of service center address. 3GPP TS 24.011 RP SC address Type-of-Address
octet in integer format (see <toda>).
<err> Error codes. For more details, see Chapter 12.4.
```

##### AT+CPMS? +CPMS:

```
<mem1>,<used1>,<total1>,<mem2>,<used2>,<total2>,<m
em3>,<used3>,<total3>
```
```
OK
Write Command
AT+CPMS=<mem1>[,<mem2>[,<mem
3>]]
```
```
Response
+CPMS:
<used1>,<total1>,<used2>,<total2>,<used3>,<total3>
```
```
OK
```
```
If there is any error related to ME functionality:
+CMS ERROR: <err>
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configurations are saved automatically.
Reference
3GPP TS 27.005
```
#### Parameter

#### Example

AT+CPMS? //Query the current SMS message storage.
+CPMS: "ME",0, 255 ,"ME",0, 255 ,"ME",0, 255

OK
AT+CPMS="SM","SM","SM" //Set SMS message storage as "SM".
+CPMS: 0,50,0,50,0,50

```
<mem1> String type. Memory from which messages are read and deleted.
"SM" (U)SIM message storage
"ME" Mobile equipment message storage
<mem2> String type. Memory to which writing and sending operations are made.
"SM" (U)SIM message storage
"ME" Mobile equipment message storage
<mem3> String type. Memory to which received SMs are preferred to be stored (unless
forwarded directly to TE (AT+CNMI).
"SM" (U)SIM message storage
"ME" Mobile equipment message storage
<usedx> Integer type. Number of messages currently in <memx>.
<totalx> Integer type. Total number of message locations in <memx>.
<err> Error codes. For more details, see Chapter 12.5.
```

##### OK

AT+CPMS? //Query the current SMS message storage.
+CPMS: "SM",0,50,"SM",0,50,"SM",0,50

OK

### 8.5. AT+CMGD Delete Message

This command deletes short messages from the preferred message storage <mem1> location <index>.
If <delflag> is present and not set to 0, the ME ignores <index> and follow the rules of <delflag> shown
below.

#### Parameter

#### AT+CMGD Delete Message

```
Test Command
AT+CMGD=?
```
```
Response
+CMGD: (list of supported <index>s),(list of supported
<delflag>s)
```
```
OK
Write Command
AT+CMGD=<index>[,<delflag>]
```
```
Response
TA deletes message from preferred message storage
<mem1> location <index>.
OK
```
```
If there is any error related to ME functionality:
+CMS ERROR: <err>
```
```
Maximum Response Time
```
```
300 ms.
Note: Operation of <delflag> depends on the storage of
deleted messages.
Characteristics The command takes effect immediately.^
The configuration is not saved.
Reference
3GPP TS 27.005
```
```
<index> Integer type. Location numbers supported by the associated memory.
<delflag> Integer type.
0 Delete the message specified in <index>
1 Delete all read messages from <mem1> storage
2 Delete all read messages from <mem1> storage and sent mobile originated
```

#### Example

AT+CMGD=1 //Delete the message specified in <index>=1.
OK
AT+CMGD=1,4 //Delete all messages from <mem1> storage.
OK

### 8.6. AT+CMGL List Message

The Read Command returns messages with status value <stat> from preferred message storage
<mem1> to the TE. If the status of the message is "REC UNREAD", the status in the storage changes to
"REC READ". When executing AT+CMGL without status value <stat>, it will report the list of SMS with
"REC UNREAD" status.

```
messages
3 Delete all read messages from <mem1> storage, sent and unsent mobile
originated messages
4 Delete all messages from <mem1> storage
<mem1> String type. Memory from which messages are read and deleted.
"SM" (U)SIM message storage
"ME" Mobile equipment message storage
<err> Error codes. For more details, see Chapter 12.5.
```
#### AT+CMGL List Message

```
Test Command
AT+CMGL=?
```
```
Response
+CMGL: (list of supported <stat>s)
```
```
OK
Write Command
AT+CMGL=[<stat>]
```
```
Response
If in text mode (AT+CMGF=1) and the command is executed
successfully:
For SMS-SUBMITs and/or SMS-DELIVERs:
```
```
+CMGL: <index>,<stat>,<oa/da>,[<alpha>],[<scts>]
[,<tooa/toda>,<length>]<CR><LF><data>[<CR><LF>
+CMGL: <index>,<stat>,<da/oa>,[<alpha>],[<scts>],
[<tooa/toda>,<length>]<CR><LF><data>[...]]
```
```
For SMS-STATUS-REPORTs:
+CMGL: <index>,<stat>,<fo>,<mr>,[<ra>],[<tora>],
<scts>,<dt>,<st>[<CR><LF>
```

#### Parameter

```
+CMGL: <index>,<stat>,<fo>,<mr>,[<ra>],[<tora>],
<scts>,<dt>,<st>[...]]
```
```
For SMS-COMMANDs:
+CMGL: <index>,<stat>,<fo>,<ct>[<CR><LF>
+CMGL: <index>,<stat>,<fo>,<ct>[...]]
```
```
For CBM storage:
+CMGL: <index>,<stat>,<sn>,<mid>,<page>,<pages>
<CR><LF><data>[<CR><LF>
+CMGL: <index>,<stat>,<sn>,<mid>,<page>,<pages>
<CR><LF><data>[...]]
```
```
OK
```
```
If in PDU mode (AT+CMGF=0) and the command is executed
successfully:
+CMGL: <index>,<stat>,[<alpha>],<length><CR><LF>
<pdu><CR><LF>
+CMGL: <index>,<stat>,[alpha],<length><CR><LF>
<pdu>[...]]
```
```
OK
```
```
If there is any error related to ME functionality:
+CMS ERROR: <err>
Execution Command
AT+CMGL
```
```
Response
List all messages with "REC UNREAD" status from message
storage <mem1>, and then the status in the storage changes
to "REC READ".
Maximum Response Time 300 ms.
```
```
Characteristics
The command takes effect immediately.
The configurations are not saved.
Reference
3GPP TS 27.005
```
```
<stat> String type. In text mode:
"REC UNREAD" Received unread messages
"REC READ" Received read messages
"STO UNSENT" Stored unsent messages
"STO SENT" Stored sent messages
```

"ALL" All messages
Integer type. In PDU mode:
0 Received unread messages
1 Received read messages
2 Stored unsent messages
3 Stored sent messages
4 All messages
<index> Integer type. Location numbers supported by the associated memory.
<da> Destination Address. 3GPP TS 23.040 TP-Destination-Address Address-Value field in
string format. BCD numbers (or GSM 7 bit default alphabet characters) are
converted to characters of the currently selected TE character set (see AT+CSCS
in 3GPP TS 27.007). The type of address is given by <toda>.
<oa> Originating address. 3 GPP TS 23.040 TP-Originating-Address Address-Value field in
string format. BCD numbers (or GSM 7 bit default alphabet characters) are converted
to characters of the currently selected TE character set (see AT+CSCS in 3GPP TS
2 7.0 07 ). The type of address is given by <tooa>.
<alpha> String type alphanumeric representation of <da> or <oa> corresponding to the entry
found in MT phonebook. Implementation of this feature is manufacturer specified. The
used character set should be the one selected with AT+CSCS command (see
definition of this command in 3GPP TS 27.007).
<scts> Service center time stamp. 3GPP TS 23.040 TP-Service-Centre-Time-Stamp in
time-string format (see <dt>).
<toda> Type of recipient address. 3GPP TS 24.011 TP-Destination-Address Type-of-Address
octet in integer format.
<tooa> Type of originating address. 3GPP TS 24.011 TP-Originating-Address
Type-of-Address octet in integer format (defalt see <toda>).
<length> Integer type. Message length. Indicate the length of the message body <data> (or
<cdata>) in characters in the text mode (AT+CMGF=1), or the length of the actual TP
data unit in octets in PDU mode (AT+CMGF=0) (i.e. the RP layer SMSC address
octets are not counted in the length).
<data> In case of SMS: 3GPP TS 23.040 TP-User-Data in text mode responses; format:

- If <dcs> (see Chapter 9.7), indicates that 3GPP TS 23.038 GSM 7 bit default
    alphabet is used and <fo> (see Chapter 9.7) indicates that 3GPP TS 23.040
    TP-User-Data-Header-Indication is not set.
- If TE character set other than "HEX" (refer to AT+CSCS in 3GPP TS 27.007):
    ME/TA converts GSM alphabet into current TE character set according to rules of
    Annex A in 3GPP TS 27.007.
- If TE character set is "HEX": ME/TA converts each 7-bit character of GSM 7 bit
default alphabet into two IRA character long hexadecimal number (e.g. character 
(GSM 7 bit default alphabet 23) is presented as 17 (IRA 49 and 55)).
- If <dcs>, indicates that 8-bit or UCS2 data coding scheme is used, or <fo>
    indicates that 3GPP TS 23.040 TP-User-Data-Header-Indication is set: ME/TA
    converts each 8-bit octet into two IRA character long hexadecimal number (e.g.
    octet with integer value 42 is presented to TE as two characters 2A (IRA 50 and


#### Example

AT+CMGF=1 //Set SMS message format as text mode.

##### 65)).

```
In case of CBS: 3GPP TS 23.041 CBM Content of Message in text mode responses;
format:
```
- If <dcs>, indicates that 3GPP TS 23.038 GSM 7 bit default alphabet is used:
    - If TE character set other than "HEX" (see AT+CSCS in 3GPP TS27.007): ME/TA
       converts GSM alphabet into current TE character set according to rules of Annex A
       in 3GPP TS 27.007.
- If TE character set is "HEX": ME/TA converts each 7-bit character of the GSM 7 bit
default alphabet into two IRA character long hexadecimal number.
    - If <dcs>, indicates that 8-bit or UCS2 data coding scheme is used: ME/TA converts
       each 8-bit octet into two IRA character long hexadecimal number.
<pdu> In case of SMS: 3GPP TS 24.011 SC address followed by 3GPP TS 23.040 TPDU
    in hexadecimal format: ME/TA converts each octet of TP data unit into two IRA
    character long hexadecimal number (e.g. octet with integer value 42 is presented to
    TE as two characters 2A (IRA 50 and 65)) 3GPP TS 27.007.
<fo> Depending on the command or result code: first octet of 3GPP TS 23.040 [3]
    SMS-DELIVER, SMS-SUBMIT (17 by default), SMS-STATUS-REPORT, or
    SMS-COMMAND (2 by default) in integer format.
<mr> 3GPP TS 23.040 [3] TP-Message-Reference in integer format.
<ra> 3GPP TS 23.040 [3] TP-Recipient-Address Address-Value field in string format; BCD
    numbers (or GSM 7 bit default alphabet characters) are converted to characters of the
    currently selected TE character set (see +CSCS in 3GPP TS 27.007 [9]); type of
    address given by <tora>.
<tora> 3GPP TS 24.011 [6] TP-Recipient-Address Type-of-Address octet in integer format
    (default see <toda>).
<scts> 3GPP TS 23.040 [3] TP-Service-Centre-Time-Stamp in time-string format (see <dt>)
<dt> 3GPP TS 23.040 [3] TP-Discharge-Time in time-string format:
    "yy/MM/dd,hh:mm:ss+zz", where characters indicate year (two last digits), month,
    day, hour, minutes, seconds and time zone. E.g. 6th of May 1994, 22:10:00 GMT+2
    hours equals "94/05/06,22:10:00+08".
<st> 3GPP TS 23.040 [3] TP-Status in integer format.
<ct> 3GPP TS 23.040 [3] TP-Command-Type in integer format (0 by default).
<sn> 3GPP TS 23.041 [4] CBM Serial Number in integer format.
<mid> 3GPP TS 23.041 [4] CBM Message Identifier in integer format.
<page> 3GPP TS 23.041 [4] CBM Page Parameter bits 4-7 in integer format.
<pages> 3GPP TS 23.041 [4] CBM Page Parameter bits 0-3 in integer format.
<mem1> Memory from which messages are read and deleted
"SM" (U)SIM message storage
"ME" Mobile equipment message storage
<err> Error codes. For more details, see Chapter 12.5.


##### OK

AT+CMGL="ALL" //List all messages from message storage.
+CMGL: 1,"STO UNSENT","",,

<This is a test from Quectel>

+CMGL: 2,"STO UNSENT","",,

<This is a test from Quectel>

OK

```
Operation of <stat> depends on the storage of listed messages.
```
### 8.7. AT+CMGR Read Message

This Write Command returns SMS messages with location value <index> from message storage
<mem1> to the TE. If status of the message is "REC UNREAD", status in the storage changes to "REC
READ".

#### AT+CMGR Read Message

```
Test Command
AT+CMGR=?
```
```
Response
OK
Write Command
AT+CMGR=<index>
```
```
Response
In Non-CDMA mode:
If in text mode (AT+CMGF=1) and the command is executed
successfully:
For SMS-DELIVER:
+CMGR: <stat>,<oa>,[<alpha>],<scts>[,<tooa>,<fo>,
<pid>,<dcs>,<sca>,<tosca>,<length>]<CR><LF><data>
```
```
OK
```
```
For SMS-SUBMIT:
+CMGR: <stat>,<da>,[<alpha>][,<toda>,<fo>,<pid>,
<dcs>,[<vp>],<sca>,<tosca>,<length>]<CR><LF><data>
```
```
OK
```
```
For SMS-STATUS-REPORTs:
+CMGR: <stat>,<fo>,<mr>,[<ra>],[<tora>],<scts>,<dt>,
```
##### NOTE


#### Parameter

```
<st>
```
```
OK
```
```
For SMS-COMMANDs:
+CMGR: <stat>,<fo>,<ct>[,<pid>,[<mn>],[<da>],[<toda>],
<length><CR><LF><cdata>]
```
```
OK
For CBM storage:
+CMGR: <stat>,<sn>,<mid>,<dcs>,<page>,<pages>
<CR><LF><data>
```
```
OK
```
```
If in PDU mode (AT+CMGF=0) and command is executed
successfully:
+CMGR: <stat>,[<alpha>],<length><CR><LF><pdu>
```
```
OK
```
```
In CDMA Text mode:
+CMGR: <stat>,<oa/da>,<scts>,<alpha>,<tooa/toda>,
<lang>,<fmt>,<length>,<prt>,<prv>,<type><CR><LF>
<data>
OK
If there is any error related to ME functionality:
+CMS ERROR: <err>
Maximum Response Time Depends on the length of message content.
```
```
Characteristics
The command takes effect immediately.
The configurations are not saved.
Reference
3GPP TS 27.005
```
```
<index> Integer type. Value in the range of location numbers supported by the associated
memory.
<stat> String type. In text mode.
"REC UNREAD" Received unread messages
"REC READ" Received read messages
"STO UNSENT" Stored unsent messages
"STO SENT" Stored sent messages
```

"ALL" All messages
Integer type. In PDU mode.
0 Received unread messages
1 Received read messages
2 Stored unsent messages
3 Stored sent messages
4 All messages
<alpha> String type alphanumeric representation of <da> or <oa> corresponding to the entry
found in MT phonebook. Implementation of this feature is manufacturer specified. The
used character set should be the one selected with AT+CSCS command (see definition
of this command in 3GPP TS 27.007).
<da> Destination address. 3GPP TS 23.040 TP-Destination-Address Address-Value field in
string format. BCD numbers (or GSM 7 bit default alphabet characters) are converted to
characters of the currently selected TE character set (refer to AT+CSCS in 3GPP TS
27.007). The type of address is given by <toda>.
<oa> Originating address. 3GPP TS 23.040 TP-Originating-Address Address-Value field in
string format. BCD numbers (or GSM 7 bit default alphabet characters) are converted to
characters of the currently selected TE character set (refer to AT+CSCS in 3GPP TS
2 7.0 07 ). The type of address is given by <tooa>.
<scts> Service center time stamp. 3GPP TS 23.040 TP-Service-Centre-Time-Stamp in
time-string format (refer to <dt>).
<fo> First octet. Depending on the command or result code: First octet of 3GPP TS 23.040
SMS-DELIVER, SMS-SUBMIT (17 by default), SMS-STATUS-REPORT, or
SMS-COMMAND in integer format. If a valid value has been entered once, the
parameter can be omitted.
<pid> Protocol identifier. 3GPP TS 23.040 TP-Protocol-Identifier in integer format (0 by
default).
<dcs> Data coding scheme. Depending on the command or result code: 3GPP TS 23.038
SMS Data Coding Scheme (0 by default), or Cell Broadcast Data Coding Scheme in
integer format.
<vp> Validity period. Depending on SMS-SUBMIT <fo> setting: 3GPP TS 23.040
TP-Validity-Period either in integer format or in time-string format (refer to <dt>).
<mn> 3GPP TS 23.040 TP-Message-Number in integer format.
<mr> 3GPP TS 23.040 TP-Message-Reference in integer format.
<ra> 3GPP TS 23.040 TP-Recipient-Address Address-Value field in string format. BCD
numbers (or GSM default alphabet characters) are converted to characters of the
currently selected TE character set (refer to AT+CSCS command). The type of address
is given by <tora>.
<tora> 3GPP TS 24.011 TP-Destination-Address Type-of-Address octet in integer format
(default refer <toda>).
<toda> 3GPP TS 24.011 TP-Destination-Address Type-of-Address octet in integer format.
<tooa> 3GPP TS 24.011 TP-Originating-Address Type-of-Address octet in integer format
(default see <toda>).
<sca> Service center address. 3GPP TS 24.011 RP SC address Address-Value field in string


format. BCD numbers (or GSM 7 bit default alphabet characters) are converted to
characters of the currently selected TE character set (refer to AT+CSCS command in
3GPP TS 27.007). The type of address is given by <tosca>.
<tosca> 3GPP TS 24.011 RP SC address Type-of-Address octet in integer format (default see
<toda>).
<length> Integer type. Message length. In the text mode (AT+CMGF=1) the length of the
message body <data> (or <cdata>) in characters, or in PDU mode (AT+CMGF=0) the
length of the actual TP data unit in octets (i.e. the RP layer SMSC address octets are
not counted in the length).
<data> User-Data in text mode responses. See Chapter 12.8 for details.
<pdu> In case of SMS: 3GPP TS 24.011 SC address followed by 3GPP TS 23.040 TPDU in
hexadecimal format: ME/TA converts each octet of TP data unit into two IRA character
long hexadecimal number (e.g. octet with integer value 42 is presented to TE as two
characters 2A (IRA 50 and 65)).
<prt> Priority.
0 Normal
1 Interactive
2 Urgent
3 Emergency
<fmt> Format.
0 GSM 7-bit
1 ASCII
6 UNICODE
<prv> Privacy.
0 Normal
1 Restricted
2 Confidential
3 Secret
<lang> Language.
0 Unspecified
1 English
2 French
3 Spanish
4 Japanese
5 Korean
6 Chinese
7 Hebrew
<type> 0 Normal
1 CPT
2 Voice Mail
3 SMS Report
<mem1> String type. Memory storage from which messages are to be read and deleted.
"SM" (U)SIM message storage
"ME" Mobile equipment message storage


#### Example

+CMTI: "SM",3 //Indicates that new message has been received and saved
to <index>=3 of "SM".
AT+CSDH=1
OK
AT+CMGR=3 //Read message.
+CMGR: "REC UNREAD","+8615021012496",,"1 3 / 12 /13,15:06:37+32",145,4,0, 0 ,"+861380021050
0",145,27

<This is a test from Quectel>

OK

### 8.8. AT+CMGS Send Message

This command sends a short message from TE to network (SMS-SUBMIT). After invoking the Write
Command, wait for the prompt > and then start to write the message. After that, enter <CTRL-Z> to
indicate the ending of PDU and begin to send the message. Sending can be cancelled by entering <ESC>
character. Abortion is acknowledged with OK, though the message will not be sent. The message
reference <mr> is returned to the TE on successful message delivery. The value can be used to identify
message upon unsolicited delivery status report result code.

```
<err> Error codes. For more details, see Chapter 12.5.
```
#### AT+CMGS Send Message

```
Test Command
AT+CMGS=?
```
```
Response
OK
Write Command
1) If text mode (AT+CMGF=1):
AT+CMGS=<da>[,<toda>]<CR>
text is entered
<Ctrl+Z/ESC>
ESC quits without sending
```
```
2) If PDU mode (AT+CMGF=0):
AT+CMGS=<length><CR>
PDU is given <Ctrl+Z/ESC>
```
```
Response
TA sends message from TE to the network (SMS-SUBMIT).
Message reference value <mr> is returned to the TE on
successful message delivery. Optionally (when AT+CSMS
<service> value is 1 and network supports) <scts> is
returned. Values can be used to identify message upon
unsolicited delivery status report result code.
If in text mode (AT+CMGF=1) and sent successfully:
+CMGS: <mr>
```
```
OK
```
```
If in PDU mode (AT+CMGF=0) and sent successfully:
+CMGS: <mr>
```

#### Parameter

1. For concatenated messages, the maximum length will be reduced by the length of the user data
    header (UDH). 3GPP TS 23.040 defines two kinds of UDH length: 6 bytes and 7 bytes, so the two
    kinds of <uid> are 8-bit (6 bytes) and 16-bit (7 bytes). AT+QCMGS uses 8-bit <uid>.
    ⚫ In case of GSM 7-bit default alphabet data coding scheme, the maximum length of each
       segment of a concatenated message is (140 octets - 6 ) × 8/7=153 characters.
    ⚫ In case of 16 bit UCS2 data coding scheme, the maximum length of each segment is
       (140-6)/2=67 characters.
    ⚫ In case of 8-bit data coding scheme, the maximum length of each segment is 140-6=134
       characters.
2. <mr> Message-Reference field gives an integer representation of a reference number of the
    SMS-SUBMIT or SMS-COMMAND submitted to the SC by the MS, and it is used to
       confirm whether the SMS-DELIVER has been received from SC duplicate or not.

##### OK

```
If there is any error related to ME functionality:
+CMS ERROR: <err>
Maximum Response Time 120 s, determined by network.
```
```
Characteristics
The command takes effect immediately.
The configurations are not saved.
Reference
3GPP TS 27.005
```
```
<da> Destination address. 3GPP TS 23.040 TP-Destination-Address Address-Value field in
string format. BCD numbers (or GSM 7-bit default alphabet characters) are
converted to characters of the currently selected TE character set (refer to
AT+CSCS in 3GPP TS 27.007). The type of address is given by <toda>.
<toda> Type of destination address. 3GPP TS 24.011 TP-Destination-Address
Type-of-Address octet in integer format.
<length> Integer type. Message length. In the text mode (AT+CMGF=1) the length of the
message body <data> (or <cdata>) in characters, or in PDU mode (AT+CMGF=0),
the length of the actual TP data unit in octets (i.e. the RP layer SMSC address octets
are not counted in the length).
Maximum length in text mode: 160 bytes.
Maximum length in PDU mode: 140 bytes.
<mr> 3GPP TS 23.040 TP-Message-Reference in integer format.
<err> Error codes. For more details, see Chapter 12.5.
```
##### NOTE


```
<uid> The field of UDH. It is a message identification of the concatenated SMS, which is
different from <mr>. Each segment in a concatenated message should have the same
<uid>, but<mr> must be incremented for each segment of a concatenated message.
```
3. AT+QCMGS does not support sending messages in PDU mode (AT+CMGF=0).

#### Example

AT+CMGF=1 //Set SMS message format as text mode.
OK
AT+CSCS="GSM" //Set character set used by the TE as GSM.
OK
AT+CMGS="15021012496"

> <This is a test from Quectel> //Enter text. Use <CTRL+Z> to send messages, or
<ESC> to quit without sending.
+CMGS: 247

OK

### 8.9. AT+CMMS More Messages to Send

This command controls the continuity of the SMS relay protocol link. If the feature is enabled (and
supported by the currently used network) multiple messages can be sent faster as the link is kept open.

#### AT+CMMS More Messages to Send

```
Test Command
AT+CMMS=?
```
```
Response
+CMMS: (list of supported <n>s)
```
```
OK
Read Command
AT+CMMS?
```
```
Response
+CMMS: <n>
```
```
OK
Write Command
AT+CMMS=<n>
```
```
Response
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CMS ERROR: <err>
Maximum Response Time 120 s, determined by network.
```

#### Parameter

```
Once Read Command is executed, a delay of 5-10 s is required before issuing the Write Command.
Otherwise +CMS ERROR: 500 may be returned.
```
### 8.10. AT+CMGW Write Message to Memory...............................................................................

This Write and Execution Commands store short messages from TE to memory storage <mem2>, and
then the memory location <index> of the stored message is returned. Message status is set to "stored
unsent" by default, but <stat> allows other status values to be given, as well.

The syntax of input text is the same as the one specified in AT+CMGS Write Command.

```
Characteristics The command takes effect immediately.^
The configuration is saved automatically.
Reference
3GPP TS 27.005
```
```
<n> Integer type.
0 Feature disabled
1 Keep enabled until the time between the response of the latest message send
command (AT+CMGS, AT+CMSS, etc.) and the next send command exceeds
1 - 5 s (the exact value is up to ME implementation), and then ME closes link and
TA switches <n> back to 0 automatically
2 Feature enabled (if the time between the response of the latest message send
command and the next send command exceeds 1-5 s (the exact value is
up to ME implementation), ME closes the link but TA does not switch <n> back
to 0 automatically)
<err> Error codes. For more details, see Chapter 12.5.
```
#### AT+CMGW Write Message to Memory

```
Test Command
AT+CMGW=?
```
```
Response
OK
Write Command
1) If text mode (AT+CMGF=1):
AT+CMGW=<oa/da>[,<tooa/toda>[,<s
tat>]]<CR>
text is entered
<Ctrl+Z/ESC>
```
```
Response
If writing is successful:
+CMGW: <index>
```
```
OK
```
##### NOTE


#### Parameter

```
<ESC> quits without sending
```
```
2) If PDU mode (AT+CMGF=0):
AT+CMGW=<length>[,<stat>]<CR>
PDU is given <Ctrl+Z/ESC>
```
```
If there is any error related to ME functionality:
+CMS ERROR: <err>
```
```
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configurations are not saved.
Reference
3GPP TS 27.005
```
```
<da> Destination address. 3GPP TS 23.040 TP-Destination-Address Address-Value field in
string format. BCD numbers (or GSM 7 bit default alphabet characters) are converted to
characters of the currently selected TE character set (see AT+CSCS in 3GPP TS
27.007). The type of address is given by <toda>.
<oa> Originating address. 3GPP TS 23.040 TP-Originating-Address Address-Value field in
string format. BCD numbers (or GSM 7 bit default alphabet characters) are converted to
characters of the currently selected TE character set (see AT+CSCS in 3GPP TS
2 7.0 07 ). The type of address given by <tooa>.
<tooa> 3GPP TS 24.011 TP-Originating-Address Type-of-Address octet in integer format
(default see <toda>).
<stat> PDU mode Text mode Explanation
0 "REC UNREAD" Received unread messages
1 "REC READ" Received read messages
2 "STO UNSENT" Stored unsent messages
3 "STO SENT" Stored sent messages
4 "ALL" All messages
<toda> 3GPP TS 24.011 TP-Destination-Address Type-of-Address octet in integer format.
<length> Integer type. Message length. Length of the message body <data> (or <cdata>) in
characters in the text mode (AT+CMGF=1), or the length of the actual TP data unit in
octets (i.e. the RP layer SMSC address octets are not counted in the length) in PDU
mode (AT+CMGF=0),.
<pdu> In case of SMS: 3GPP TS 24.011 SC address followed by 3GPP TS 23.04TPDU in
hexadecimal format: ME/TA converts each octet of TP data unit into two IRA character
long hexadecimal number (e.g. octet with integer value 42 is presented to TE as two
characters 2A (IRA 50 and 65)).
<index> Integer type. Index of message in selected storage <mem2>.
<err> Error codes. For more details, see Chapter 12.5.
```

#### Example

AT+CMGF=1 //Set SMS message format as text mode.
OK
AT+CSCS="GSM" //Set character set used by the TE as GSM.
OK
AT+CMGW="15021012496"

> <This is a test from Quectel> //Enter in text. Use <CTRL+Z> to write message or
<ESC> to quit without sending.

+CMGW: 4

OK
AT+CMGF=0 //Set SMS message format as PDU mode.
OK
AT+CMGW=18
> 0051FF00000008000A0500030002016D4B8BD5

+CMGW: 5

OK

### 8.11. AT+CMSS Send Message from Storage

This Write Command sends a message with location value <index> from message storage <mem2> to
the network (SMS-SUBMIT). If new destination address <da> is given, it should be used instead of the
one stored with the message. Reference value <mr> is returned to the TE on successful message
delivery. Values can be used to identify message upon unsolicited delivery status report of result code.

#### AT+CMSS Send Message from Storage

```
Test Command
AT+CMSS=?
```
```
Response
OK
Write Command
AT+CMSS=<index>[,<da>[,<toda>]]
```
```
Response
If in text mode (AT+CMGF=1) and sent successfully:
+CMSS: <mr>[,<scts>]
```
```
OK
```
```
If in PDU mode (AT+CMGF=0) and sent successfully:
+CMSS: <mr> [,<ackpdu>]
```
```
OK
```

#### Parameter

#### Example

AT+CMGF=1 //Set SMS message format as text mode.
OK
AT+CSCS="GSM" //Set character set used by the TE as GSM.
OK
AT+CMGW="15021012496"
> Hello //Enter in text. Use <CTRL+Z> to send message or
<ESC> to quit without sending.
+CMGW: 4

OK
AT+CMSS=4 //Send the message of index 4 from memory storage.
+CMSS: 54

OK

```
If there is any error related to ME functionality:
+CMS ERROR: <err>
Maximum Response Time 120 s, determined by network.
```
```
Characteristics
The command takes effect immediately.
The configurations are not saved.
Reference
3GPP TS 27.005
```
```
<index> Integer type. Value in the range of location numbers supported by the associated
memory.
<da> Destination Address. 3GPP TS 23.040 TP-Destination-Address Address-Value field in
string format. BCD numbers (or GSM 7 bit default alphabet characters) are
converted to characters of the currently selected TE character set (see AT+CSCS
in 3GPP TS 27.007). The type of address is given by <toda>.
<toda> Type of destination address. 3GPP TS 24.011 TP-Destination-Address
Type-of-Address octet in integer format.
<mr> 3GPP TS 23.040 TP-Message-Reference in integer format.
<scts> Service center time stamp. 3GPP TS 23.040 TP-Service-Centre-Time-Stamp in
time-string format (see <dt>).
<ackpdu> The format is the same as for <pdu> in case of SMS, but without 3GPP TS 24.011 SC
address field and the parameter is bound by double quote characters like a normal
string type parameter.
<err> Error codes. For more details, see Chapter 12.5.
```

### 8.12. AT+CNMA New Message Acknowledgement to UE/TE

The Write and Execution Commands confirm successful receipt of a new message (SMS-DELIVER or
SMS-STATUS-REPORT) routed directly to the TE. If the UE does not receive acknowledgement within
required time (network timeout), it sends an RP-ERROR message to the network. The UE will
automatically disable routing to the TE by setting both <mt> and <ds> values of AT+CNMI to 0.

#### Parameter

```
<n> Integer type. Parameter required only for PDU mode.
0 Command operates similarly as in text mode
1 Send positive (RP-ACK) acknowledgement to the network. Accepted only in PDU mode
2 Send negative (RP-ERROR) acknowledgement to the network. Accepted only in PDU
mode
<err> Error code. For more details, see Chapter 12.5.
```
#### AT+CNMA New Message Acknowledgement to UE/TE

```
Test Command
AT+CNMA=?
```
```
Response
+CNMA: (list of supported <n>s)
```
```
OK
Execution Command
AT+CNMA
```
```
Response
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CMS ERROR: <err>
Write Command
AT+CNMA=<n>
```
```
Response
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CMS ERROR: <err>
Maximum Response Time 300 ms
Characteristics /
Reference
3GPP TS 27.005
```

```
The Execution and Write Commands will only be used when AT+CSMS parameter <service> equals 1
(phase 2+) and an appropriate URC has been issued by the module, i.e.:
+CMT for <mt>=2 incoming message classes 0,1,3 and none;
+CMT for <mt>=3 incoming message classes 0 and 3;
+CDS for <ds>=1.
```
#### Example

##### AT+CSMS=1

##### +CSMS: 1,1,1

##### OK

##### AT+CNMI=1,2,0,0,0

##### OK

##### +CMT: "+8615021012496",,"13/03/18,17:07:21+32",145,4,0,0,"+8613800551500",145,28

This is a test from Quectel. //Short message is outputted directly when an SMS is incoming.

AT+CNMA //Send ACK to the network.
OK
AT+CNMA
+CMS ERROR： 340 // Returned error for the second time. It needs ACK only once.

### 8.13. AT+CNMI SMS Event Reporting Configuration

This Write Command selects the procedure on how the received new messages from the network are
indicated to the TE when TE is active, e.g. DTR is at low level (ON). If TE is inactive (e.g. DTR is at high
level (OFF)), message should be received as specified in 3GPP TS 23.038.

#### AT+CNMI New Message Indications to TE

```
Test Command
AT+CNMI=?
```
```
Response
+CNMI: (list of supported <mode>s),(list of supported
<mt>s),(list of supported <bm>s),(list of supported
<ds>s),(list of supported <bfr>s)
```
```
OK
Read Command
AT+CNMI?
```
```
Response
+CNMI: <mode>,<mt>,<bm>,<ds>,<bfr>
```
##### NOTE


#### Parameter

```
<mode> Integer type.
0 Buffer unsolicited result codes in the TA. If TA result code buffer is full, indications
can be buffered in some other place or the oldest indications may be discarded
and replaced with the new received indications.
1 Discard indication and reject new received message unsolicited result codes
when TA-TE link is reserved (e.g. in on-line data mode). Otherwise forward them
directly to the TE.
2 Buffer unsolicited result codes in the TA when TA-TE link is reserved (e.g. in data
mode) and flush them to the TE after reservation. Otherwise forward them directly
to the TE.
<mt> Integer type. The rules for storing received SMS depend on its data coding scheme (refer to
3GPPTS 23.038) and preferred memory storage (AT+CPMS) setting, and the value is:
0 No SMS-DELIVER indications are routed to the TE.
1 If SMS-DELIVER is stored into ME/TA, indication of the memory location is routed
to the TE by using unsolicited result code: +CMTI: <mem>,<index>
2 SMS-DELIVERs (except class 2) are routed directly to the TE using unsolicited
result code: +CMT: [<alpha>],<length><CR><LF><pdu> (PDU mode enabled)
or +CMT: <oa>,[<alpha>],<scts>[,<tooa>,<fo>,<pid>,<dcs>,<sca>,<tosca>,
<length>]<CR><LF><data> (text mode enabled; about the parameters in italics,
see AT+CSDH) or ^HCMT: <oa>,<scts>,<lang>,<fmt>,<length>,
<prt>,<prv>,<type>,<stat><CR><LF><data> (text mode for CDMA SMS). Class
2 messages result in indication as defined in <mt>=1.
3 Class 3 SMS-DELIVERs are routed directly to TE by using unsolicited result
codes defined in <mt>=2. Messages of other classes result in indication as
defined in <mt>=1.
<bm> Integer type. The rules for storing received CBMs depend on its data coding scheme (see
```
##### OK

```
Write Command
AT+CNMI[=<mode>[,<mt>[,<bm>[,<ds
>[,<bfr>]]]]]
```
```
Response
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CMS ERROR: <err>
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configurations are not saved automatically.
Reference
3GPP TS 27.005
```

```
3GPP TS 23.038) and the setting of Select CBM Types (AT+CSCB), and the value is:
0 No CBM indications are routed to the TE.
2 New CBMs are routed directly to the TE using unsolicited result code:
+CBM: <length><CR><LF><pdu> (PDU mode);
or +CBM: <sn>,<mid>,<dcs>,<page>,<pages><CR><LF><data> (text mode)
<ds> Integer type.
0 No SMS-STATUS-REPORTs are routed to the TE.
1 SMS-STATUS-REPORTs are routed to the TE using unsolicited result code:
+CDS: <length><CR><LF><pdu> (PDU mode)
+CDS: <fo>,<mr>,[<ra>],[<tora>],<scts>,<dt>,<st> (text mode)
2 If SMS-STATUS-REPORT is stored into ME/TA, indication of the memory location
is routed to the TE using unsolicited result code:
+CDSI: <mem>,<index>
<bfr> Integer type.
0 TA buffer of unsolicited result codes defined within this command is flushed to the
TE when <mode> 1 or 2 is entered (OK response should be given before flushing
the codes).
1 TA buffer of unsolicited result codes defined within this command is cleared when
<mode> 1 or 2 is entered.
<err> Error codes. For more details, see Chapter 12.5.
```
```
Unsolicited result code:
+CMTI: <mem>,<index> Indicates that new message has been received
+CMT: [<alpha>],<length><CR><LF><pdu> Short message is outputted directly
+CBM: <length><CR><LF><pdu> Cell broadcast message is outputted directly
```
#### Example

AT+CMGF=1 //Set SMS message format as text mode.
OK
AT+CSCS="GSM" //Set character set used by the TE as GSM.
OK
AT+CNMI=1,2,0,1,0 //Set SMS-DELIVERs are routed directly to the TE.
OK

+CMT: "+8615021012496",,"13/03/18,17:07:21+32",145,4,0,0,"+8613800551500",145,28
This is a test from Quectel. //Short message is outputted when an SMS is incoming.

##### NOTE


### 8.14. AT+CSCB Select Cell Broadcast Message Types

The Write Command selects which types of CBMs are to be received by the ME.

```
The configuration is stored to NVM.
```
#### Parameter

#### AT+CSCB Select Cell Broadcast Message Types

```
Test Command
AT+CSCB=?
```
```
Response
+CSCB: (list of supported <mode>s)
```
```
OK
Read Command
AT+CSCB?
```
```
Response
+CSCB: <mode>,<mids>,<dcss>
```
```
OK
Write Command
AT+CSCB=<mode>[,mids>[,<dcss>]]
```
```
Response
OK
```
```
If there is any error related to ME functionality:
+CMS ERROR: <err>
Maximum Response Time 300 ms
```
```
Characteristics The command takes effect immediately.^
The configurations are saved automatically.
Reference
3GPP TS 27.005
```
```
<mode> Integer type.
0 Message types specified in <mids> and <dcss> are accepted
1 Message types specified in <mids> and <dcss> are not accepted
<mids> String type. All different possible combinations of CBM message identifiers (refer to <mid>)
(default is empty string), e.g. "0,1,5,320-478,922".
<dcss> String type. All different possible combinations of CBM data coding schemes (refer to
<dcs>) (default is empty string), e.g. "0-3,5".
<err> Error codes. For more details, see Chapter 12.5.
```
##### NOTE


### 8.15. AT+CSDH Show SMS Text Mode Parameters

This Write Command controls whether detailed header information is shown in text mode result codes.

#### Parameter

```
<show> Integer type.
0 Do not show header values defined in commands +CSCA, +CSMP (<sca>, <tosca>,
<fo>, <vp>, <pid>, <dcs>) or <length>, <toda> or <tooa> in +CMT, +CMGL,
+CMGR result codes for SMS-DELIVERs and SMS-SUBMITs in text mode.
For SMS-COMMANDs in +CMGR result code, do not show <pid>,<mn>,<da>,
<toda>,<length> or<cdata>.
1 Show the values in result codes
```
#### Example

##### AT+CSDH=0

##### OK

##### AT+CMGR= 2

##### +CMGR: "STO UNSENT" ,"",

<This is a test from Quectel>

OK

#### AT+CSDH Show SMS Text Mode Parameters

```
Test Command
AT+CSDH=?
```
```
Response
+CSDH: (list of supported <show>s)
```
```
OK
Read Command
AT+CSDH?
```
```
Response
+CSDH: <show>
```
```
OK
Write Command
AT+CSDH[=<show>]
```
```
Response
OK
Or
ERROR
Maximum Response Time 300 ms
Characteristics /
Reference
3GPP TS 27.005
```

##### AT+CSDH=1

##### OK

##### AT+CMGR= 2

##### +CMGR: "STO UNSENT","",,128,17,0, 0 ,143,"+8613800551500",145,18

<This is a test from Quectel>

OK

### 8.16. AT+CSMP Set SMS Text Mode Parameters

This command sets values for additional parameters needed when a short message is sent to the
network or placed in a storage in text mode.

#### Parameter

#### AT+CSMP Set SMS Text Mode Parameters

```
Test Command
AT+CSMP=?
```
```
Response
OK
Read Command
AT+CSMP?
```
```
Response
+CSMP: <fo>,<vp>,<pid>,<dcs>
```
```
OK
Write Command
AT+CSMP=<fo>[,<vp>[,<pid>[,<dcs>]
]]
```
```
Response
TA selects values for additional parameters needed when SM
is sent to the network or placed in a storage when text mode
is selected (AT+CMGF=1). It is possible to set the validity
period starting from when the SM is received by the SMSC
(<vp> ranges from 0 to 255) or define the absolute time of
validity period termination (<vp> is a string).
OK
Maximum Response Time 300 ms
```
```
Characteristics /
Reference
3GPP TS 27.005
```
```
<fo> Depending on the command or result code: first octet of 3GPP TS 23.040
SMS-DELIVER, SMS-SUBMIT (17 by default), SMS-STATUS-REPORT,
SMS-COMMAND in integer format. If a valid value has been entered once, parameter
can be omitted.
<vp> Validity period. Depending on SMS-SUBMIT <fo> setting: 3GPP TS 23.040
```

### 8.17. AT+QCMGS Send Concatenated Messages

This command sends concatenated massages. Different from AT+CMGS, when sending a concatenated
message via this command, each segment of the concatenated message must be identified by the
additional parameters: <uid>, <msg_seg> and <msg_total>. When sending all segments of the
message one by one, AT+QCMGS must be executed multiple times (equal to <msg_total>) for each
segment. This command is only used in text mode (AT+CMGF=1).

#### Parameter

```
<uid> Integer type. Message identification in the user data header (UDH). Range:
0 – 255. This parameter is defined and inputted by the user. All segments of a
same concatenated message must have the same <uid>. Different concatenated
messages should have different <uid>.
<msg_seg> Integer type. Sequence number of a concatenated message. Range: 0–7.
<msg_seg>=0 means: ignore the value and regard it as a non-concatenated
message.
```
```
TP-Validity-Period either in integer format or in time-string format (refer to <dt>).
<pid> Protocol identifier. 3GPP TS 23.040 TP-Protocol-Identifier in integer format (0 by
default).
<dcs> Data coding scheme. Depending on the command or result code: 3GPP TS 23.038
SMS Data Coding Scheme (0 by default), or Cell Broadcast Data Coding Scheme in
integer format.
```
#### AT+QCMGS Send Concatenated Messages

```
Test Command
AT+QCMGS=?
```
```
Response
OK
Write Command
If text mode (+CMGF=1):
AT+QCMGS=<da>[,<toda>],<uid>,<m
sg_seg>,<msg_total><CR>
text is entered
<Ctrl+Z/ESC>
```
```
Response
If in text mode (AT+CMGF=1) and sent successfully:
+QCMGS: <mr>
```
```
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CMS ERROR: <err>
Maximum Response Time 120 s, determined by network.
```
```
Characteristics
This command takes effect immediately.
The configuration is not saved.
```

```
<msg_total> Integer type. The total number of the segments of one concatenated message.
Range: 0–7. <msg_total>=0 or 1 means: ignore the value and regard it as a
non-concatenated message.
<da> Refer to AT+CMGS.
<toda> Refer to AT+CMGS.
<mr> Refer to AT+CMGS.
<err> Error codes. For more details, see Chapter 12.5.
```
1. For concatenated messages, the maximum length will be reduced by the length of the user data
    header (UDH). 3GPP TS 23.040 defines two kinds of UDH length: 6 bytes and 7 bytes, so the two
    kinds of <uid> are 8-bit (6 bytes) and 16-bit (7 bytes). AT+QCMGS uses 8-bit <uid>.
    ⚫ In case of GSM 7-bit default alphabet data coding scheme, the maximum length of each
       segment of a concatenated message is (140 octets - 6 ) × 8/7=153 characters.
    ⚫ In case of 16-bit UCS2 data coding scheme, the maximum length of each segment is
       (140-6)/2=67 characters.
    ⚫ In case of 8-bit data coding scheme, the maximum length of each segment is 140-6=134
       characters.
2. <mr> Message-Reference field gives an integer representation of a reference number of the
    SMS-SUBMIT or SMS-COMMAND submitted to the SC by the MS, and it is used to
       confirm whether the SMS-DELIVER has been received from SC duplicate or not.
          <uid> The field of UDH. It is message identification of the concatenated SMS, which is
    different from <mr>. Each segment in a concatenated message should have the same
    <uid>, but <mr> must be incremented for each segment of a concatenated message.
3. AT+QCMGS does not support sending messages in PDU mode (AT+CMGF=0).

#### Example

AT+CMGF=1 //Set SMS message format as text mode.
OK
AT+CSCS="GSM" //Set character set used by the TE as GSM.
OK
AT+QCMGS="15056913384",120,1,2 //Input 120 for <uid>, and send the first segment of the
>ABCD<Ctrl-Z> concatenated SMS.
+QCMGS: 190

OK
AT+QCMGS="15056913384",120,2,2 //Send the second segment of the concatenated SMS.
>EFGH<Ctrl-Z>
+QCMGS: 191

OK

##### NOTE


### 8.18. AT+QCMGR Read Concatenated Messages

The function of this command is similar to AT+CMGR, except that the message to be read is a segment of
concatenated messages, and parameters <uid>, <msg_seg> and <msg_total> would be shown in the
result. Several segments should be concatenated to a whole concatenated message according to these
three parameters. Similar to AT+QCMGS, AT+QCMGR is only used in text mode (AT+CMGF=1).

#### AT+QCMGR Read Concatenated Messages

```
Test Command
AT+QCMGR=?
```
```
Response
OK
Write Command
AT+QCMGR=<index>
```
```
Response
in text mode (AT+CMGF=1) and command is executed
successfully:
```
```
For SMS-DELIVER:
+QCMGR:
<stat>,<oa>,[<alpha>],<scts>[,<tooa>,<fo>,<pid>,<dcs>,
<sca>,<tosca>,<length>][,<uid>,<msg_seg>,<msg_total>
]<CR><LF><data>
```
```
OK
```
```
For SMS-SUBMIT:
+QCMGR:
<stat>,<da>,[<alpha>][,<toda>,<fo>,<pid>,<dcs>,[<vp>],
<sca>,<tosca>,<length>][,<uid>,<msg_seg>,<msg_total>
]<CR><LF><data>
```
```
OK
```
```
For SMS-STATUS-REPORTs:
+QCMGR:
<stat>,<fo>,<mr>,[<ra>],[<tora>],<scts>,<dt>,<st>
```
```
OK
```
```
For SMS-COMMANDs:
+QCMGR:
<stat>,<fo>,<ct>[,<pid>,[<mn>],[<da>],[<toda>],<length>
<CR><LF><cdata>]
```
```
OK
```

#### Parameter

```
<uid> Integer type. Message identification in the user data header (UDH). Range: 0 – 65535
(see NOTES). All segments of a same concatenated message have same <uid>.
Different concatenated messages should have different <uid>.
<msg_seg> Integer type. Sequence number of a concatenated message. Range: 1 – 7.
<msg_total> Integer type. The total number of the segments of one concatenated message. Range:
2 – 7.
Other parameters please refer to AT+CMGR
<err> Error codes. For more details, see Chapter 12.5.
```
1. The <uid> in AT+QCMGR is different from the <uid> in AT+QCMGS. It is possible that UE
    receives concatenated messages with 8-bit or 16-bit <uid>. So its maximal value is 255 with 8-bit
    and 65535 with 16-bit.
2. If the message to be read is not a concatenated message, <uid>, <msg_seg> and <msg_total>
    would not be shown in the result.

#### Example

+CMTI: "SM",3 //The first message of a concatenated message comes.

+CMTI: "SM",4 //The second message of a concatenated message comes.
AT+QCMGR=3 //Read the first segment of the concatenated message.
+QCMGR: "REC UNREAD","+8615056913384",,"13/07/30,14:44:37+32",120,1,2
ABCD

OK
AT+QCMGR=4 //Read the second segment of the concatenated message.
+QCMGR: "REC UNREAD","+8615056913384",,"13/07/30,14:44:37+32",120,2,2
EFGH

OK

```
Else, If there is any error related to ME functionality:
+CMS ERROR: <err>
Maximum Response Time Depends on the length of message content.
Characteristics /
```
##### NOTE


## 9 Packet Domain Commands

### 9.1. AT+CGATT Attachment or Detachment of PS

This Write Command attaches the MT to, or detaches the MT from the Packet Domain service. After the
command has been completed, the MT remains in V.25ter command state. If the MT is already in the
requested state, the command will be ignored and the OK response will be returned. If the requested
state cannot be achieved, an ERROR or +CME ERROR response is returned.

#### Parameter

#### AT+CGATT Attachment or Detachment of PS

```
Test Command
AT+CGATT=?
```
```
Response
+CGATT: (list of supported <state>s)
```
```
OK
Read Command
AT+CGATT?
```
```
Response
+CGATT: <state>
```
```
OK
Write Command
AT+CGATT=<state>
```
```
Response
OK
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 140 s, determined by network.
```
```
Characteristics
Whether the command takes effect determined by network.
The configuration is not saved.
Reference
3GPP TS 27.007
```
```
<state> Integer type. Indicates the state of PS attachment.
0 Detached
1 Attached
Other values are reserved and will result in an ERROR response to the Write Command.
<err> Error codes. For more details, see Chapter 12.4.
```

#### Example

AT+CGATT=1 //Attach to PS service.
OK
AT+CGATT=0 //Detach from PS service.
OK
AT+CGATT? //Query the current PS service state.
+CGATT: 0

OK

### 9.2. AT+CGDCONT Define PDP Context

This command specifies PDP context parameters for a specific context <cid>. A special form of the Write
Command (AT+CGDCONT=<cid>) causes the values for context <cid> to become undefined. It is not
allowed to change the definition of an already activated context.

This Read Command returns the current settings for each defined PDP context.

#### AT+CGDCONT Define PDP Context

```
Test Command
AT+CGDCONT=?
```
```
Response
+CGDCONT: (list of supported <cid>s),<PDP_type>, <A
PN>,<PDP_addr>,(list of supported <data_comp>s),(list o
f supported <head_comp>s),(list of supported <IPv4_a
ddr_alloc>s),(list of supported <request_type>s)
```
```
OK
Read Command
AT+CGDCONT?
```
```
Response
+CGDCONT: <cid>,<PDP_type>,<APN>,<PDP_addr>,
<data_comp>,<head_comp>,<IPv4_addr_alloc>,
<request_type>
[ ... ]
```
```
OK
Write Command
AT+CGDCONT=<cid>[,<PDP_type>[,<
APN>[,<PDP_addr>[,<data_comp>[,<
head_comp>[,<IPv4_addr_alloc>[,<re
quest_type>]]]]]]]
```
```
Response
OK
Or
ERROR
```
```
Maximum Response Time 300 ms
```
```
Characteristics The command takes effect immediately.
```

#### Parameter

```
The configurations are saved automatically.
```
```
Reference
3GPP TS 27.007
```
```
<cid> Integer type. PDP context identifier. A numeric parameter which specifies a particular
PDP context definition. The parameter is local to the TE-MT interface and is used in
other PDP context-related commands. The range of permitted values (minimum value
= 1) is returned by the test form of the command.
<PDP_type> String type. Packet data protocol type, a string parameter which specifies the type of
packet data protocol.
"IP" Internet Protocol (IETF STD 5)
"PPP"
"IPV6"
"IPV4V6"
<APN> String type. Access point name, a string parameter that is a logical name used to
select the GGSN or the external packet data network. If the value is null or omitted,
then the subscription value will be requested.
<PDP_addr> String type. Identifies the MT in the address space applicable to the PDP. If the value is
null or omitted, then a value may be provided by the TE during the PDP startup
procedure or, failing that, a dynamic address will be requested. The allocated address
may be read with AT+CGPADDR.
<data_comp> Integer type. Controls PDP data compression (applicable for SNDCP only) (refer to
3GPP TS 44.065).
0 Off (Default if value is omitted)
1 On (Manufacturer preferred compression)
2 V.42bis
<head_comp> Integer type. Controls PDP header compression (refer to 3GPP TS 44.065 and 3GPP
TS 25.323).
0 Off (Default if value is omitted)
1 On
2 RFC1144
3 RFC2507
4 RFC3095
<IPv4_addr_alloc> Integer type. Controls how the MT/TA requests to get the IPv4 address
information.
0 IPv4 address allocation through NAS signaling
1 IPv4 address allocated through DHCP
```
```
<request_type> Integer type. Indicate the type of PDP context activation request for the PDP
context.
0 PDP context is for new PDP context establishment or for handover from
```

### 9.3. AT+CGACT Activate or Deactivate PDP Context

This Write Command activates or deactivates the specified PDP context(s). After the command has
completed, the MT remains in V.250 command state. If any PDP context is already in the requested state,
the state for that context remains unchanged. If the MT is not PS attached when the activation form of the
command is executed, the MT first performs a PS attach and then attempts to activate the specified
contexts. If no <cid>s specify the activation/deactivation form of the command, it will activate or
deactivate all defined contexts.

```
a non-3GPP access network (how the MT decides whether the PDP
context is for new PDP context establishment or for handover is
implementation specific).
1 PDP context is for emergency bearer services
```
#### AT+CGACT Activate or Deactivate PDP Context

```
Test Command
AT+CGACT=?
```
```
Response
+CGACT: (list of supported <state>s)
```
```
OK
Read Command
AT+CGACT?
```
```
Response
+CGACT: <cid>,<state>
[+CGACT: <cid>,<state>
...]
```
```
OK
Write Command
AT+CGACT=<state>,<cid>
```
```
Response
OK
Or
NO CARRIER
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 150 s, determined by network.
```
```
Characteristics
Whether the command takes effect is determined by network.
The configurations are not saved.
Reference
3GPP TS 27.007
```

#### Parameter

#### Example

AT+CGDCONT=1,"IP","UNINET" //Define PDP context.
OK
AT+CGACT=1,1 //Activated PDP.
OK
AT+CGACT=0,1 //Deactivated the PDP.
OK

### 9.4. AT+CGDATA Enter Data State............................................................................................

This Write Command causes the MT to perform whatever actions that are necessary to establish
communication between the TE and the network using one or more packet domain PDP types. This may
include performing a PS attach and one or more PDP context activations. Any command following the
AT+CGDATA in the AT command line will not be processed by the MT.

If the <L2P> value is unacceptable to the MT, the MT shall return an ERROR or +CME ERROR response.
Otherwise, the MT issues the intermediate result code CONNECT and enters V.250 online data state.
After data transfer is completed, and the layer 2 protocol termination procedure has been completed
successfully, the command state is reentered and the MT returns the final result code OK.

```
<state> Integer type. Indicates the state of PDP context activation.
0 Deactivated
1 Activated
Other values are reserved and will result in an ERROR response to the Write Command
<cid> Integer type. Specifies a particular PDP context definition (see AT+CGDCONT).
<err> Error codes. For more details, see Chapter 12.4.
```
#### AT+CGDATA Enter Data State

```
Test Command
AT+CGDATA=?
```
```
Response
+CGDATA: (list of supported <L2P>s)
```
```
OK
Write Command
AT+ CGDATA=<L2P>[,<cid>[,<cid>[,...
]]]
```
```
Response
CONNECT
Or
ERROR
```
```
If there is any error related to ME functionality:
```

#### Parameter

### 9.5. AT+CGPADDR Show PDP Address

This Write Command returns a list of PDP addresses for the specified context identifiers. If no <cid> is
specified, the addresses for all defined contexts are returned.

```
+CME ERROR: <err>
```
```
Maximum Response Time 300 ms
```
```
Characteristics
Whether the command takes effect is determined by network.
The configurations are not saved.
Reference
3GPP TS 27.007
```
```
<L2P> String type. Indicates the layer 2 protocol to be used between the TE and MT:
PPP Point to Point protocol for a PDP such as IP
Other values Not supported and will result in an ERROR response to the Execution
Command
<cid> Integer type. Specifies a particular PDP context definition (see AT+CGDCONT).
<err> Error codes. For more details, see Chapter 12.4.
```
#### AT+CGPADDR Show PDP Address

```
Test Command
AT+CGPADDR=?
```
```
Response
+CGPADDR: (list of defined <cid>s)
```
```
OK
Write Command
AT+CGPADDR[=<cid> [,<cid>[,...]]]
```
```
Response
+CGPADDR: <cid>,<PDP_addr>
[+CGPADDR: <cid>,<PDP_addr>
...]
```
```
OK
Or
ERROR
Maximum Response Time 300 ms
```
```
Characteristics
Whether the command takes effect is determined by network.
The configurations are not saved.
Reference
3GPP TS 27.007
```

#### Parameter

#### Example

AT+CGDCONT=1,"IP","UNINET" //Define PDP context.
OK
AT+CGACT=1,1 //Activated PDP.
OK
AT+CGPADDR=1 //Show PDP address.
+CGPADDR: 1,"10.76.51.180"

OK

### 9.6. AT+CGREG Network Registration Status

This command queries the network registration status and controls the presentation of an unsolicited
result code +CGREG: <stat> when <n>=1 and there is a change in the MT’s GPRS network registration
status in GERAN/UTRAN, or unsolicited result code +CGREG: <stat>[,[<lac>],[<ci>],[<AcT>]] when
<n>=2 and there is a change of the network cell in GERAN/UTRAN.

```
<cid> Integer type. Specifies a particular PDP context definition (see AT+CGDCONT).
<PDP_addr> String type. Identifies the MT in the address space applicable to the PDP. The address
may be static or dynamic. For a static address, it will be the one set by AT+CGDCONT
when the context was defined. For a dynamic address it will be the one assigned
during the last PDP context activation that used the context definition referred to by
<cid>. <PDP_address> is omitted if none is available.
```
#### AT+CGREG Network Registration Status

```
Test Command
AT+CGREG=?
```
```
Response
+CGREG: (Range of supported <n>s)
```
```
OK
Read Command
AT+CGREG?
```
```
Response
+CGREG: <n>,<stat>[,<lac>,<ci>[,<AcT>]]
```
```
OK
Write Command
AT+CGREG[=<n>]
```
```
Response
OK
Or
ERROR
Maximum Response Time 300 ms
```

#### Parameter

#### Example

##### AT+CGREG= 2

##### OK

##### AT+CGATT=0

##### OK

```
Characteristics The command takes effect immediately.^
The configuration is saved automatically.
Reference
3GPP TS 27.007
```
```
<n> Integer type. Control the presentation of the specified URC.
0 Disable network registration unsolicited result code
1 Enable network registration unsolicited result code +CGREG: <stat>
2 Enable network registration and location information unsolicited result code
+CGREG: <stat>[,<lac>,<ci>[,<AcT>]]
<stat> Integer type. Network registration status.
0 Not registered. MT is not currently searching an operator to register to. The UE is in
GMM state GMM-NULL or GMM-DEREGISTERED-INITIATED. The GPRS service is
disabled, but the UE is allowed to attach for GPRS if requested by the user.
1 Registered, home network. The UE is in GMM state GMM-REGISTERED or
GMM-ROUTING-AREA-UPDATING-INITIATED INITIATED on the home PLMN.
2 Not registered, but MT is currently trying to attach or searching an operator to register
to. UE is in GMM state GMM-DEREGISTERED or GMM-REGISTERED-INITIATED.
The GPRS service is enabled, but an allowable PLMN is currently not available. The
UE will start a GPRS attach as soon as an allowable PLMN is available.
3 Registration denied. The UE is in GMM state GMM-NULL. The GPRS service is
disabled, and the UE is not allowed to attach for GPRS if requested by the user.
4 Unknown
5 Registered, roaming
<lac> String type. Two-byte location area code in hexadecimal format (e.g. "00C3" equals 195 in
decimal).
<ci> String type. 16 bit (GSM) or 28 bit (UMTS/LTE) cell ID in hexadecimal format.
<AcT> Integer type. Access technology selected.
0 GSM
2 UTRAN
3 GSM W/EGPRS
4 UTRAN W/HSDPA
5 UTRAN W/HSUPA
6 UTRAN W/HSDPA and HSUPA
7 E-UTRAN
```

##### +CGREG: 2

##### AT+CGATT=1

##### OK

##### +CGREG: 1,"D504","80428B5", 7

### 9.7. AT+CGEREP Packet Domain Event Reporting

This Write Command enables or disables sending of unsolicited result codes +CGEV: XXX from MT to TE
in the case of certain events occurring in the Packet Domain MT or the network. <mode> controls the
processing of unsolicited result codes specified within this command. <bfr> controls the effect on buffered
codes when <mode>= 1 or 2.

#### AT+CGEREP Packet Domain Event Reporting

```
Test Command
AT+CGEREP=?
```
```
Response
+CGEREP: (list of supported <mode>s),(list of supported
<bfr>s)
```
```
OK
Read Command
AT+CGEREP?
```
```
Response
+CGEREP: <mode>,<bfr>
```
```
OK
Write Command
AT+CGEREP=mode[,<bfr>]
```
```
Response
OK
Or
ERROR
Execution Command
AT+CGEREP
```
```
Response
OK
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configurations are saved automatically.
Reference
3GPP TS 27.007
```

#### Parameter

```
The unsolicited result codes and the corresponding events are defined as follows:
```
1. +CGEV: REJECT <PDP_type>, <PDP_addr>: A network request for PDP context activation
    occurred when the MT was unable to report it to the TE with a +CRING unsolicited result code and
    was automatically rejected.
    Note: This event is not applicable for EPS.
2. +CGEV: NW REACT <PDP_type>, <PDP_addr>,[<cid>]: The network has requested a context
    reactivation. The <cid> used to reactivate the context is provided if known to the MT.
    Note: This event is not applicable for EPS.
3. +CGEV: NW DEACT <PDP_type>, <PDP_addr>,[<cid>]: The network has forced a context
    deactivation. The <cid> used to activate the context is provided if known to the MT.
4. +CGEV: ME DEACT <PDP_type>, <PDP_addr>,[<cid>]: The mobile equipment has forced a
    context deactivation. The <cid> used to activate the context is provided if known to the MT.
5. +CGEV: NW DETACH: The network has forced a Packet Domain detach. This implies that all
    active contexts have been deactivated. These are not reported separately.
6. +CGEV: ME DETACH: The mobile equipment has forced a Packet Domain detach. This implies
    that all active contexts have been deactivated. These are not reported separately.
7. +CGEV: NW CLASS <class>: The network has forced a change of MS class. The highest
    available class is reported (see AT+CGCLASS).
8. +CGEV: ME CLASS <class>: The mobile equipment has forced a change of MS class. The
    highest available class is reported (see AT+CGCLASS).
9. +CGEV: PDN ACT <cid>: Activated a context. The context represents a PDN connection in LTE
    or a Primary PDP context in GSM/UMTS.
10. +CGEV: PDN DEACT <cid>: Deactivated a context. The context represents a PDN connection in
    LTE or a Primary PDP context in GSM/UMTS.

```
<mode> Integer type. Controls the processing of unsolicited result codes specified within this
command.
0 Buffer unsolicited result codes in the MT; if MT result code buffer is full, the oldest
ones can be discarded. No code is forwarded to the TE.
1 Discard unsolicited result codes when MT-TE link is reserved (e.g. in on-line data
mode), otherwise forward them directly to the TE.
2 Buffer unsolicited result codes in the MT when MT-TE link is reserved (e.g. in
on-line data mode) and flush them to the TE when MT-TE link becomes available.
Otherwise forward them directly to the TE.
<bfr> Integer type. Controls the effect on buffered codes.
0 MT buffer of unsolicited result codes defined within this command is cleared when
<mode> 1 or 2 is specified.
1 MT buffer of unsolicited result codes defined within this command is flushed to the
TE when <mode> 1 or 2 is specified (OK response shall be given before flushing
the codes).
```
##### NOTE


#### Example

##### AT+CGEREP=?

##### +CGEREP: (0-2),(0,1)

##### OK

##### AT+CGEREP?

##### +CGEREP: 0,0

##### OK

### 9.8. AT+CEREG EPS Network Registration Status

This command queries the network registration status and controls the presentation of an unsolicited
result code +CEREG: <stat> when <n>=1 and there is a change in the MT’s EPS network registration
status in E-UTRAN, or unsolicited result code +CEREG: <stat>[,[<tac>],[<ci>],[<AcT>]] when <n>=2
and there is a change of the network cell in E-UTRAN.

#### Parameter

#### AT+CEREG EPS Network Registration Status

```
Test Command
AT+CEREG=?
```
```
Response
+CEREG: (list of supported <n>s)
```
```
OK
Read Command
AT+CEREG?
```
```
Response
+CEREG: <n>,<stat>[,<tac>,<ci>[,<AcT>]]
```
```
OK
Write Command
AT+CEREG[=<n>]
```
```
Response
OK
Or
ERROR
Maximum Response Time 300 ms
```
```
Characteristics
Reference
3GPP TS 27.007
```
```
<n> Integer type. Controls the presentation of an unsolicited result code +CEREG: <stat>.
0 Disable network registration unsolicited result code
```

### 9.9. AT+QGDCNT Packet Data Counter

This command allows the application to check how much bytes are sent to or received by the module.

```
1 Enable network registration unsolicited result code +CEREG: <stat>
2 Enable network registration and location information unsolicited result code
+CEREG: <stat>[,<tac>,<ci>[,<AcT>]]
<stat> Integer type.
0 Not registered. MT is not currently searching an operator to register to
1 Registered, home network
2 Not registered, but MT is currently trying to attach or searching an operator to register to
3 Registration denied
4 Unknown
5 Registered, roaming
<tac> String type. Two-byte tracking area code in hexadecimal format.
<ci> String type. 28 - bit E-UTRAN cell ID in hexadecimal format.
<AcT> Integer type. Access technology selected.
0 GSM
2 UTRAN
3 GSM W/EGPRS
4 UTRAN W/HSDPA
5 UTRAN W/HSUPA
6 UTRAN W/HSDPA and HSUPA
7 E-UTRAN
```
#### AT+QGDCNT Packet Data Counter

```
Test Command
AT+QGDCNT=?
```
```
Response
+QGDCNT: (list of supported <op>s)
```
```
OK
Read Command
AT+QGDCNT?
```
```
Response
+QGDCNT: <bytes_sent>,<bytes_recv>
```
```
OK
Write Command
AT+QGDCNT=<op>
```
```
Response
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
```

#### Parameter

```
<op> Integer type. The operation about data counter.
0 Reset the data counter
1 Save the results of data counter to NVM
If results need to be automatically saved, refer to AT+QAUGDCNT.
<bytes_sent> Integer type. The amount of sent bytes.
<bytes_recv>
<err>
```
```
Integer type. The amount of received bytes.
Error codes. For more details, see Chapter 12.4.
```
```
When the MT is powered on, <bytes_sent> and <bytes_recv> are loaded from results of data counter
in NVM. The default result in NVM is 0.
```
#### Example

AT+QGDCNT=? //Test command.
+QGDCNT: (0,1)

OK
AT+QGDCNT? //Query the current bytes sent and received.
+QGDCNT: 3832,4618

OK
AT+QGDCNT=1 //Save the results to NVM.
OK
AT+QGDCNT=0 //Reset the data counter.
OK

### 9.10. AT+QAUGDCNT Auto Save Packet Data Counter

This command allows AT+QGDCNT to save results to NVM automatically.

```
Maximum Response Time 300 ms
```
```
Characteristics
Whether the command takes effect is determined by network.
The configuration is not saved.
```
##### NOTE


#### Parameter

```
<value>
```
```
<err>
```
```
Integer type. This parameter is the time-interval for AT+QGDCNT to save results to
NVM automatically. Range: 0, 30–65535. Default: 0. Unit: second. If it is set to 0,
auto-save feature is disabled.
Error code. For more details, see Chapter 12.4.
```
#### Example

AT+QAUGDCNT=? //Test command.
+QAUGDCNT: (0,30-65535)

OK
AT+QGDCNT=35 //Set <value> to 35.
OK
AT+QAUGDCNT? //Query the interval of auto-save.
+QAUGDCNT: 35
OK

#### AT+QAUGDCNT Auto Save Packet Data Counter

```
Test Command
AT+QAUGDCNT=?
```
```
Response
+QAUGDCNT: (list of supported <value>s)
```
```
OK
Read Command
AT+QAUGDCNT?
```
```
Response
+QAUGDCNT: <value>
```
```
OK
Write Command
AT+QAUGDCNT=<value>
```
```
Response
OK
Or
ERROR
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
```
```
Characteristics
Whether the command takes effect is determined by network.
The configuration is not saved.
```

### 9.11. AT+QNETDEVSTATUS Query USBNet Device Status

This command can query USBNet device status.

#### Parameter

```
<on_off> Integer type.
0 Disable USBNet device status URC
1 Enable USBNet device status URC
<state>
Integer type.
0 Enable USBNet device status URC
1 A USBNet call is ready and MCU can get IP addresses by DHCP or QMI
2 A USBNet call is connected
<IP_type>
```
```
<instance>
```
```
Integer type.
4 IPv4 call
6 IPv6 call
Other value is invalid.
Integer type. USBNet call instance. It is always 1.
```
#### AT+QNETDEVSTATUS Query USBNet Device Status

```
Test Command
AT+QNETDEVSTATUS=?
```
```
Response
+QNETDEVSTATUS: (list of supported <on_off>s)
```
```
OK
Read Command
AT+QNETDEVSTATUS?
```
```
Response
If an USBNet call exists, <state>, <IP_type> and <instance> will be
included.
+QNETDEVSTATUS: <on_off>[,<state>[,<IP_type>[,<instance>]]]
```
```
OK
Write Command
AT+QNETDEVSTATUS=<on_
off>
```
```
Response
OK
Or
ERROR
Maximum Response Time 300 ms
```
```
Characteristics /
```

#### Example

AT+QNETDEVSTATUS=? //Test command.
+QNETDEVSTATUS: (0,1)

OK
AT+QNETDEVSTATUS? //Query command.
+QNETDEVSTATUS: 0

OK
AT+QNETDEVSTATUS=1 //Enable USBNet device status URC.
OK
AT+QNETDEVSTATUS? //Query command.
+QNETDEVSTATUS: 1

OK
AT$QCRMCALL=1,1,1,2,1 //Start an IPv4 USBNet call.
$QCRMCALL: 1,4

OK

+QNETDEVSTATUS: 1,1,4,1 //USBNet call is ready URC.

+QNETDEVSTATUS: 1,2,4,1 //MCU get IP addresses from module.

AT+QNETDEVSTATUS? //Query the current configuration.
+QNETDEVSTATUS: 1,2,4,1

OK
AT$QCRMCALL=0,1,1,2,1 //Stop an IPv4 USBNet call.
OK

+QNETDEVSTATUS: 1,0,4,1 //Module report USBNet call disconnect URC.
AT+QNETDEVSTATUS? //Query the current configuration.
+QNETDEVSTATUS: 1

OK


### 9.12. AT+CGCONTRDP PDP Context Read Dynamic Parameters

#### Parameter

```
<cid> Integer type. Specifies a particular non secondary PDP context
definition. The parameter is local to the TE-MT interface and is used in
other PDP context-related command.
<bearer_id>
Integer type. Identifies the bearer, i.e. the EPS bearer in EPS and the
NSAPI in UMTS/GPRS.
1 A RmNet call is ready and MCU can get IP addresses by DHCP or
QMI
2 A RmNet call is connected
<APN> String type. A logical name that was used to select the GGSN or the
```
#### AT+CGCONTRDP PDP Context Read Dynamic Parameters

```
Test Command
AT+CGCONTRDP=?
```
```
Response
+CGCONTRDP: (list of supported <cid>s)
```
```
OK
Write Command
AT+CGCONTRDP[=<cid>]
```
```
Response
+CGCONTRDP: <cid>,<bearer_id>,<APN>[,<local_addr and
subnet_mask>[,<gw_addr>[,<DNS_prim_addr>[,<DNS_sec_a
ddr>[,<P-CSCF_prim_addr>[,<P-CSCF_sec_addr>[,<IM_CN_S
ignalling_Flag>[,<LIPA_indication>[,<IPv4_MTU>[,<WLAN_Of
fload>[,<Local_Addr_Ind>[,<Non-IP_MTU>[,<Serving_PLMN_
rate_control_value>]]]]]]]]]]]]]]
```
```
[+CGCONTRDP: <cid>,<bearer_id>,<APN>[,<local_addr and
subnet_mask>[,<gw_addr>[,<DNS_prim_addr>[,<DNS_sec_a
ddr>[,<P-CSCF_prim_addr>[,<P-CSCF_sec_addr>[,<IM_CN_S
ignalling_Flag>[,<LIPA_indication>[,<IPv4_MTU>[,<WLAN_Of
fload>[,<Local_Addr_Ind>[,<Non-IP_MTU>[,<Serving_PLMN_
rate_control_value>]]]]]]]]]]]]]
```
```
[...]
```
```
OK
Or
ERROR
Maximum Response Time 300 ms
```
```
Characteristics /
```

<local_addr and
subnet_mask>

<gw_addr>

<DNS_prim_addr>
<DNS_sec_addr>
<P_CSCF_prim_addr>
<P_CSCF_sec_addr>
<IM_CN_Signalling_Flag>

<LIPA_indication>

external packet data network.
String type. Shows the IP address and subnet mask of the MT. The string
is given as dot-separated numeric (0–255) parameters on the form:
"a1.a2.a3.a4.m1.m2.m3.m4" for IPv4 or
"a1.a2.a3.a4.a5.a6.a7.a8.a9.a10.a11.a12.a13.a14.a15.a16.m1.m2.m3.
m4.m5.m6.m7.m8.m9.m10.m11.m12.m13.m14.m15.m16" for IPv6.
String type. Shows the Gateway Address of the MT. The string is given
as dot-separated numeric (0–255) parameters.
String type. Shows the IP address of the primary DNS server.
String type. Shows the IP address of the secondary DNS server.
String type. Shows the IP address of the primary P-CSCF server.
String type. Shows the IP address of the secondary P-CSCF server.
Integer type. Shows whether the PDP context is for IM CN
subsystem-related signalling only or not.
0 PDP context is not for IM CN subsystem-related signalling only
1 PDP context is for IM CN subsystem-related signalling only
Integer type. Indicates that the PDP context provides connectivity using
a LIPA PDN connection. This parameter cannot be set by the TE.
0 Indication not received that the PDP context provides connectivity
using a LIPA PDN connection
1 Indication received that the PDP context provides connectivity using
a LIPA PDN connection
<IPv4_MTU>
<WLAN_Offload>

Integer type. Shows the IPv4 MTU size in octets.
Integer type. Indicates whether traffic can be offloaded using the
specified PDN connection via a WLAN or not. This refers to bits 1 and 2
of the WLAN offload acceptability IE as specified in 3GPP TS 24.008 [8]
subclause 10.5.6.20.
0 Offloading the traffic of the PDN connection via a WLAN when in S1
mode or when in Iu mode is not acceptable.
1 Offloading the traffic of the PDN connection via a WLAN when in S1
mode is acceptable, but not acceptable in Iu mode.
2 Offloading the traffic of the PDN connection via a WLAN when in Iu
mode is acceptable, but not acceptable in S1 mode.
3 Offloading the traffic of the PDN connection via a WLAN when in S1
mode or when in Iu mode is acceptable.
<Local_Addr_Ind>
Integer type. Indicates whether or not the MS and the network support
local IP address in TFTs (see 3GPP TS 24.301 [83] and 3GPP TS 24.008
[8] subclause 10.5.6.3)
0 Indicates that the MS or the network or both do not support local IP
address in TFTs
1 Indicates that the MS and the network support local IP address in
TFTs
<Non-IP_MTU>
<Serving_PLMN_rate_cont

```
Integer type. Shows the Non-IP MTU size in octets.
Integer type. Indicates the maximum number of uplink messages the UE
```

```
rol_value> is allowed to send in a 6-minute interval. This refers to octet 3 to 4 of the
Serving PLMN rate control IE as specified in 3GPP TS 24.301 [8]
subclause 9.9.4.28.
```
### 9.13. AT+QNETDEVCTL Make/Disconnect PDP Call

This command makes or disconnects a PDP call.

#### Parameter

#### AT+QNETDEVCTL Make/Disconnect PDP Call

```
Test Command
AT+QNETDEVCTL=?
```
```
Response
+QNETDEVCTL: (list of supported <op>s),(list of su
pported <contextID>),(list of supported <URC_enabl
e>s),(list of supported <state>s)
```
```
OK
Read Command
AT+QNETDEVCTL?
```
```
Response
+QNETDEVCTL: <op>,<contextID>,<URC_enable>,<
state>
```
```
OK
Write Command
Make a call through a specified PDP context
AT+QNETDEVCTL=<op>,<contextID>[,<U
RC_enable>]
```
```
Response
OK
Or
ERROR
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configurations are saved automatically.
```
```
<op> Integer type. Make or disconnect a call.
0 Disconnect a call
1 Make a call
3 Make a call and automatically remake a call after disconnecting from the network,
and automatically make a call after startup
<contextID> Integer type. PDP context ID. Range: 1 – 15.
<URC_enable> Integer type. Whether to enable URC that reports the call status.
0 Disable
1 Enable
<state> Integer type. Call status.
0 Failed
```

```
You can configure <op> as 0/1 to disable automatically making a call after startup as needed.
```
#### Example

AT+QNETDEVCTL= 3 ,1,1 //Configure <contextID>= 1 to make a call.
OK

```
1 Successful
```
##### NOTE


## 10 Hardware Related Commands

### 10.1. AT+QPOWD Power off

This command shuts down the module. The UE returns OK immediately when the command is executed.
Then the UE deactivates the network. After it is completed, the UE outputs POWERED DOWN and enters
into the shutdown state. The maximum time for unregistering network is 60 s. The UE is not allowed to
turn off the power before the module’s STATUS pin is set low or the URC POWERED DOWN is outputted
to avoid data loss.

#### Parameter

#### AT+QPOWD Power off

```
Test Command
AT+QPOWD=?
```
```
Response
+QPOWD: (list of supported <n>s)
```
```
OK
Execution Command
AT+QPOWD[=<n>]
```
```
Response
OK
```
```
POWERED DOWN
Maximum Response Time 300 ms
Characteristics /
```
```
<n> Integer type. Power down the module.
0 Immediately power down
1 Normal power down
```

### 10.2. AT+CCLK Clock

This command sets and queries the real time clock (RTC) of the module. The current setting is retained
until the module is totally disconnected from power.

#### Parameter

#### Example

AT+CCLK? //Query the local time.
+CCLK: "08/01/04,00:19:43+00"

OK

#### AT+CCLK Clock

```
Test Command
AT+CCLK=?
```
```
Response
OK
Read Command
AT+CCLK?
```
```
Response
+CCLK: <time>
```
##### OK

```
Write Command
AT+CCLK=<time>
```
```
Response
OK
```
```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
```
```
Characteristics
The command takes effect immediately.
The configuration is not saved.
Reference
3GPP TS 27.007
```
```
<time> String type. The format is "yy/MM/dd,hh:mm:ss±zz", indicating year (last two digits), month,
day, hour, minutes, seconds and time zone (indicates the difference, expressed in quarters
of an hour, between the local time and GMT; range: -48 to + 56 ). E.g. May 6th, 1994,
22:10:00 GMT+2 hours equals to "94/05/06,22:10:00+08".
<err> Error codes. For more details, see Chapter 12.4.
```

### 10.3. AT+CBC Battery Charge

This command returns battery charge status <bcs> and battery charge level <bcl> of the MT.

#### Parameter

#### AT+CBC Battery Charge

```
Test Command
AT+CBC=?
```
```
Response
+CBC: (list of supported <bcs>s),(list of supported
<bcl>s),<voltage>
```
```
OK
Execution Command
AT+CBC
```
```
Response
+CBC: <bcs>,<bcl>,<voltage>
```
##### OK

```
If there is any error related to ME functionality:
+CME ERROR: <err>
Maximum Response Time 300 ms
Characteristics /
Reference
3GPP TS 27.007
```
```
<bcs> Integer type. Battery charge status.
0 ME is not charging
1 ME is charging
2 Charging has been finished
<bcl> Integer type. Battery charge level.
0 – 100 Remaining capacity of battery.
<voltage> Battery voltage (Mv).
<err> Error codes. For more details, see Chapter 12.4.
```

### 10.4. AT+QADC Read ADC Value

This command reads the voltage value of ADC channel.

#### Parameter

#### AT+QADC Read ADC Value

```
Test Command
AT+QADC=?
```
```
Response
+QADC: (list of supported <port>s)
```
```
OK
Read Command
AT+QADC=<port>
```
```
Response
+QADC: <status>,<value>
```
```
OK
Maximum Response Time 300 ms
```
```
Characteristics /
```
```
<port> Integer type. Channel number of the ADC.
0 ADC Channel 0
1 ADC Channel 1
<status> Integer type. Whether the ADC value is read successfully.
0 Fail
1 Success
<value> The voltage of specified ADC channel. Unit: mV.
```

### 10.5. AT+QSCLK Enable/Disable Low Power Mode

This command enables or disables low power mode. When low power mode is enabled, and both DTR
and WAKEUP_IN are pulled up, the module directly enters into sleep mode. If low power mode is enabled,
but both DTR and WAKEUP_IN are pulled down, only after the DTR and the WAKEUP_IN are pulled up,
can the module enter into low power mode.

#### Parameter

#### AT+QSCLK Enable/Disable Low Power Mode

```
Test Command
AT+QSCLK=?
```
```
Response
+QSCLK: (list of supported <n>s)
```
```
OK
Read Command
AT+QSCLK?
```
```
Response
+QSCLK: <n>
```
```
OK
Write Command
AT+QSCLK=<n>
```
```
Response
OK
Maximum Response Time 300 ms
```
```
Characteristics The command takes effect immediately^
The configuration is not saved
Reference
Quectel
```
```
<n> Integer type. Disable or enable low power mode.
0 Disable
1 Enable. It is controlled by DTR pin and WAKEUP_IN pin.
```

## 11 Other Related Commands

### 11.1. GNSS Related AT Commands (Not Supported Currently)

Please refer to Quectel_EG800Q&EG91xQ_Series_GNSS_Application_Note for details of GNSS
function.

## Table 4: GNSS Related AT Commands

```
Commands Description
```
```
AT+QGPSCFG GNSS configurations
```
```
AT+QGPSDEL Deletes assistance data
```
```
AT+QGPS Turns on GNSS
```
```
AT+QGPSEND Turns off GNSS
```
```
AT+QGPSLOC Acquires positioning information
```
```
AT+QGPSGNMEA Acquires NMEA sentences
```
```
AT+QGPSXTRA Enables gpsOneXTRA assistance function
```
```
AT+QGPSXTRATIME Injects gpsOneXTRA time
```
```
AT+QGPSXTRADATA Injects gpsOneXTRA data file
```

### 11.2. DFOTA Related AT Command

See Quectel_EG800Q&EG91xQ_Series_DFOTA_Upgrade_Guide for details of DFOTA function.

## Table 5: DFOTA Related AT Command

### 11.3. FTP(S) Related AT Commands

See Quectel_EG800Q&EG91xQ_Series_FTP(S)_Application_Note for details of FTP(S) function.

## Table 6: FTP(S) Related AT Commands

```
Command Description
```
```
AT+QFOTADL Upgrades firmware via DFOTA
```
```
Commands Description
```
```
AT+QFTPCFG Configures parameters for FTP(S) server
```
```
AT+QFTPOPEN Logins to FTP(S) server
```
```
AT+QFTPCWD Configures the current directory on FTP(S) server
```
```
AT+QFTPPWD Gets the current directory on FTP(S) server
```
```
AT+QFTPPUT Uploads a file to FTP(S) server
```
```
AT+QFTPGET Downloads a file from FTP(S) server
```
```
AT+QFTPSIZE Gets the file size on FTP(S) server
```
```
AT+QFTPDEL Deletes a file on FTP(S) server
```
```
AT+QFTPMKDIR Creates a folder on FTP(S) server
```
```
AT+QFTPRMDIR Deletes a folder on FTP(S) server
```
```
AT+QFTPLIST Lists content of a directory on FTP(S) server
```
```
AT+QFTPNLIST Lists file names of a directory on FTP(S) server
```
```
AT+QFTPMLSD Lists standardized file and directory information
```

### 11.4. HTTP(S) Related AT Commands

Please refer to Quectel_EG800Q&EG91xQ_Series_HTTP(S)_Application_Note for details of HTTP(S)
function.

## Table 7: HTTP(S) Related AT Commands

```
AT+QFTPMDTM Gets the file modification time on FTP(S) server
```
```
AT+QFTPRENAME Renames a file or folder on FTP(S) server
```
```
AT+QFTPLEN Gets the length of transferred data
```
```
AT+QFTPSTAT Gets the status of FTP(S) server
```
```
AT+QFTPCLOSE Logs out from FTP(S) server
```
```
Commands Description
```
```
AT+QHTTPCFG Configures parameters for HTTP(S) server
```
```
AT+QHTTPURL Sets URL of HTTP(S) server
```
```
AT+QHTTPGET Sends GET request to HTTP(S) server
```
```
AT+QHTTPGETEX Sends range GET request to HTTP(S) server
```
```
AT+QHTTPPOST Sends POST request to HTTP(S) server via UART/USB
```
```
AT+QHTTPPOSTFILE Sends POST request to HTTP(S) server via file
```
```
AT+QHTTPREAD Reads response from HTTP(S) server via UART/USB
```
```
AT+QHTTPREADFILE Reads response from HTTP(S) server via file
```
```
AT+QHTTPSTOP Cancels HTTP(S) request
```

### 11.5. TCP(IP) Related AT Commands

Please refer to Quectel_EG800Q&EG91xQ_Series_TCP(IP)_Application_Note for details of TCP(IP)
function.

## Table 8: TCP(IP) Related AT Commands.................................................................................................

```
Commands Description
```
```
AT+QICSGP Configures parameters of a TCP/IP context
```
```
AT+QIACT Activates a PDP context
```
```
AT+QIDEACT Deactivates a PDP context
```
```
AT+QIOPEN Opens a socket service
```
```
AT+QICLOSE Closes a socket service
```
```
AT+QISTATE Queries socket service status
```
```
AT+QISEND Sends data
```
```
AT+QIRD Retrieves the received TCP/IP data
```
```
AT+QISENDEX Sends hex string
```
```
AT+QISWTMD Switches data access modes
```
```
AT+QPING Pings a remote server
```
```
AT+QNTP Synchronizes local time with NTP server
```
```
AT+QIDNSCFG Configures address of DNS server
```
```
AT+QIDNSGIP Gets IP address by domain name
```
```
AT+QICFG Configures optional parameters
```
```
AT+QISDE Controls whether to echo the data for AT+QISEND
```
```
AT+QIGETERROR Queries the last error code
```

### 11.6. SSL Related AT Commands

Please refer to Quectel_EG800Q&EG91xQ_Series_SSL_Application_Note for details of SSL function.

## Table 9: SSL Related AT Commands

```
Commands Description
```
```
AT+QSSLCFG Configures Parameters of an SSL Context
```
```
AT+QSSLOPEN Opens an SSL Socket to Connect a Remote Server
```
```
AT+QSSLSEND Sends Data via SSL Connection
```
```
AT+QSSLRECV Receives Data via SSL Connection
```
```
AT+QSSLCLOSE Closes an SSL Connection
```
```
AT+QSSLSTATE Queries the State of SSL Connection
```

## 12 Appendix References

## Table 10: Related Documents

## Table 11: Terms and Abbreviations

```
SN Document Name
```
[ 1 ] V.25ter

[ 2 ] 3GPP TS 27.007

[3] 3GPP TS 27.005

```
[ 4 ] Quectel_EG800Q&EG91xQ_Series_GNSS_Application_Note
```
```
[ 5 ] Quectel_EG800Q&EG91xQ_Series_DFOTA_Upgrade_Guide
```
```
[ 6 ] Quectel_EG800Q&EG91xQ_Series_FTP(S)_Application_Note
```
```
[ 7 ] Quectel_EG800Q&EG91xQ_Series_HTTP(S)_Application_Note
```
```
[ 8 ] Quectel_EG800Q&EG91xQ_Series_TCP(IP)_Application_Note
```
```
[9] Quectel_EG800Q&EG91xQ_Series_SSL_Application_Note
```
```
Abbreviation Description
```
```
3 GPP 3 rd Generation Partnership Project
```
```
ACDB Audio Calibration Database
```
```
ACK Acknowledge Character
```
```
ACL Access Control List
```
```
ADC Analog-to-Digital Converter
```
```
AMR Adaptive Multi-Rate
```
```
APN Access Point Name
```

ARFCN Absolute Radio-Frequency Channel Number

ASCII American Standard Code for Information Interchange

BCD Binary-Coded Decimal

CBM Cell Broadcast Message

CCH Control Channel

CDMA Code Division Multiple Access

CFU Call Forwarding Unconditional

CLI Calling Line Identity

CLIP Calling Line Identification Presentation

CLIR Calling Line Identification Restriction

COL Connected Line

COLP Connected Line Identification Presentation

COLR Connected Line Identification Restriction

CPT Communication Production Technology

CS Circuit Switching

CSD Circuit Switch Data

DCD Dynamic Content Delivery

DCD Data Carrier Detection

DCE Data Circuit-terminating Equipment

DCH Data Channel

DCS Data Coding Scheme

DEC Decode

DFOTA Delta Firmware Over-The-Air

DNS Domain Name Server

DPCH Dedicated Physical Channel


DRX Discontinuous Reception

DTE Data Terminal Equipment

DTMF Dual Tone Multi Frequency

DTR Data Terminal Ready

ECC Emergency Call

ECT Explicit Call Transfer supplementary service

EFS Embedded File System

EGPRS Enhanced General Packet Radio Service

EMM EPS Mobility Management

ENC Encode

EONS Enhanced Operator Name String

EPS Evolved Packet System

ESM EPS Session Management

E-UTRAN Evolved UMTS Terrestrial Radio Access Network

EVDO Evolution, Data Only

FDD Frequency Division Duplexing

FDPCH Fraction-Dedicated Physical Channel

FEM Front-end Module

FPLMN Forbidden PLMN

FTM Factory Test Mode

FTP(S) File Transfer Protocol over SSL

GBK Chinese Internal Code Specification

GERAN GSM EDGE Radio Access Network

GGSN Gateway GPRS Support Node

GMT Greenwich Mean Time


GNSS Global Navigation Satellite System

GPIO General-Purpose Input/Output

GPRS General Packet Radio Service

GSM Global System for Mobile Communications

HDR High-Dynamic Range

HSDPA High Speed Downlink Packet Access

HSUPA High Speed Uplink Packet Access

HTTP(S) Hypertext Transfer Protocol over SSL

ICCID Integrated Circuit Card Identifier

IDSN Integrated Services Digital Network

IETF The Internet Engineering Task Force

IIC Inter-Integrated Circuit

IMEI International Mobile Equipment Identity

IMS IP Multimedia Subsystem

IMSI International Mobile Subscriber Identity

Ipv 4 Internet Protocol version 4

Ipv6 Internet Protocol version 6

IRA International Reference Alphabet

IRAT Inter-Radio Access Technology

IWF Interactive Website Framework

LIPA Local IP Access

LTE Long Term Evolution

MBN Modem Software Configuration

MCC Mobile Country Code

MCU Microprogrammed Control Unit


ME Mobile Equipment

MMS Multimedia Messaging Service

MNC Mobile Network Code

MO Mobile Originated

MPTY Multi-party

MS Mobile Station

MSC Mobile Services Switching Center

MSISDN Mobile Subscriber International ISDN/PSTN number

MT Mobile Terminal

MTU Maximum Transmission Unit

NMEA National Marine Electronics Association

NIC Network Interface Card

##### NITZ

```
Network Identity and Time Zone / Network Informed Time Zone.
It is a mechanism for provisioning local time and date, time zone and DST
offset, as well as network provider identity information, to mobile devices via
a wireless network.
```
NSAPI Network Service Access Point Identifier

NVM Non-Volatile Random Access Memory

OIR Originating Identification Restriction

PCM Pulse Code Modulation

PDN Public Data Network

PDP Packet Data Protocol

PDU Protocol Data Unit

PIN Personal Identification Number

PLMN Public Land Mobile Network

PPP Point to Point Protocol

PSC Primary Synchronization Code


PUK Personal Identification Number Unlock Key

QCI QoS Class Identifier

QMI Qualcom Message Interface

QoS Quality of Service

RAT Radio Access Technology

RDI Remote Defect Indication

RI Ring Indicator

RLP Radio Link Protocol

RPLMN Registered PLMN

RTC Real Time Clock

RTS/CTS Request To Send/Clear To Send

RSCP Received Signal Code Power

RxQual Received Signal Quality

SAP Service Access Point

SDU Service Data Unit

SMS Short Message Service

SMSC Short Message Service Center

SMTP Simple Mail Transfer Protocol

SN Serial Number

SNDCP Subnetwork Dependent Convergence Protocol

SSL Secure Sockets Layer

TA Terminal Adapter

TCP Transmission Control Protocol

TDD Time Division Duplexing

TDSCDMA Time Division-Synchronous Code Division Multiple Access


TE Terminal Equipment

TFT Traffic Flow Template

TTS Text To Speech

UARFCN UTRA Absolute Radio Frequency Channel Number

UART Universal Asynchronous Receiver/Transmitter

UAC USB Audio Class

UCS2 Unicode

UDH User Data Header

UDI Unique Device Identification

UDP User Datagram Protocol

UDUB User Determined User Busy

UE User Equipment

UFS User File System

UMTS Universal Mobile Telecommunications System

UICC Universal Integrated Circuit Card

URC Unsolicited Result Code

USB Universal Serial Bus

(U)SIM Universal Subscriber Identity Module

USSD Unstructured Supplementary Service Data

UTRAN UMTS Terrestrial Radio Access Network

VoLTE

```
Voice (voice calls) over LTE. A standard high-speed wireless communication
for mobile phones and data terminals, including Internet of things devices
and wearables.
```
WCDMA Wideband Code Division Multiple Access

WLAN Wireless Local Area Network


### 12.1. Factory Default Settings Restorable with AT&F

## Table 12: Factory Default Settings Restorable with AT&F

```
AT Command Parameters Factory Defaults
```
```
ATE <value> 1
```
```
ATQ <n> 0
```
```
ATS3 <n> 13
```
```
ATS4 <n> 10
```
```
ATS5 <n> 8
```
```
ATV <value> 1
```
```
ATX <value> 4
```
```
AT&C <value> 1
```
```
AT&D <value> 2
```
```
AT+CREG <n> 0
```
```
AT+CGREG <n> 0
```
```
AT+CMEE <n> 1
```
```
AT+CSCS <chset> "GSM"
```
```
AT+CSMS <service> 0
```
```
AT+CMGF <mode> 0
```
```
AT+CSMP <fo>,<vp>,<pid>,<dcs> 17,167,0,0
```
```
AT+CSDH <show> 0
```
```
AT+CSCB <mode> 0
```
```
AT+CPMS <mem1>,<mem2>,<mem3> "ME","ME","ME"
```

### 12.2. AT Command Settings Storable with AT&W

## Table 13: AT Command Settings Storable with AT&W

```
AT+CNMI <mode>,<mt>,<bm>,<ds>,<bfr> 2,1,0,0,0
```
```
AT+CMMS <n> 0
```
```
AT+CTZR <reporting> 0
```
```
AT+CGEREP <mode>,<brf> 0,0
```
```
AT+CEREG <n> 0
```
```
AT Command Parameters Display with AT&V
```
```
ATE <value> Yes
```
```
ATQ <n> Yes
```
```
ATV <value> Yes
```
```
ATX <value> Yes
```
```
AT&C <value> Yes
```
```
AT&D <value> Yes
```
```
AT+IPR <rate> No
```
```
AT+CREG <n> No
```
```
AT+CGREG <n> No
```
```
AT+CEREG <n> No
```

### 12.3. AT Command Settings Storable with ATZ

## Table 14: AT Command Settings Storable with ATZ

### 12.4. Summary of CME ERROR Codes

Final result code +CME ERROR: <err> indicates an error related to mobile equipment or network. The
operation is similar to ERROR result code. None of the following commands in the same command line is
executed. Neither ERROR nor OK result code shall be returned.

<err> values are mostly used by common message commands. The following table lists most of general
and GRPS related ERROR codes. For some GSM protocol failure cause described in GSM specifications,
the corresponding ERROR codes are not included.

```
AT Command Parameters Factory Defaults
```
```
ATE <value> 1
```
```
ATQ <n> 0
```
```
ATV <value> 1
```
```
ATX <value> 4
```
```
AT&C <value> 1
```
```
AT&D <value> 2
```
```
AT+CREG <n> 0
```
```
AT+CGREG <n> 0
```
```
AT+CEREG <n> 0
```

## Table 15: Different Coding Schemes of +CME ERROR: <err>

```
Code of <err> Meaning
```
```
0 Phone failure
```
```
1 No connection to phone
```
```
2 Phone-adaptor link reserved
```
```
3 Operation not allowed
```
```
4 Operation not supported
```
```
5 PH-SIM PIN required
```
```
6 PH-FSIM PIN required
```
```
7 PH-FSIM PUK required
```
```
10 SIM not inserted
```
```
11 SIM PIN required
```
```
12 SIM PUK required
```
```
13 SIM failure
```
```
14 SIM busy
```
```
15 SIM wrong
```
```
16 Incorrect password
```
```
17 SIM PIN2 required
```
```
18 SIM PUK2 required
```
```
20 Memory full
```
```
21 Invalid index
```
```
22 Not found
```
```
23 Memory failure
```
```
24 Text string too long
```
```
25 Invalid characters in text string
```

### 12.5. Summary of CMS ERROR Codes

Final result code +CMS ERROR: <err> indicates an error related to mobile equipment or network. The
operation is similar to ERROR result code. None of the following commands in the same command line is
executed. Neither ERROR nor OK result code shall be returned.

<err> values are mostly used by common message commands:

```
26 Dial string too long
```
```
27 Invalid characters in dial string
```
```
30 No network service
```
```
31 Network timeout
```
```
32 Network not allowed - emergency calls only
```
```
40 Network personalization PIN required
```
```
41 Network personalization PUK required
```
```
42 Network subset personalization PIN required
```
```
43 Network subset personalization PUK required
```
```
44 Service provider personalization PIN required
```
```
45 Service provider personalization PUK required
```
```
46 Corporate personalization PIN required
```
```
47 Corporate personalization PUK required
```
```
901 Audio unknown error
```
```
902 Audio invalid parameters
```
```
903 Audio operation not supported
```
```
904 Audio device busy
```

## Table 16: Different Coding Schemes of +CMS ERROR: <err>

```
Code of <err> Meaning
```
```
107 Other General problems
```
```
300 ME failure
```
```
301 SMS ME reserved
```
```
302 Operation not allowed
```
```
303 Operation not supported
```
```
304 Invalid PDU mode
```
```
305 Invalid text mode
```
```
310 SIM not inserted
```
```
311 SIM pin necessary
```
```
312 PH SIM pin necessary
```
```
313 SIM failure
```
```
314 SIM busy
```
```
315 SIM wrong
```
```
316 SIM PUK required
```
```
317 SIM PIN2 required
```
```
318 SIM PUK2 required
```
```
320 Memory failure
```
```
321 Invalid memory index
```
```
322 Memory full
```
```
330 SMSC address unknown
```
```
331 No network
```
```
332 Network timeout
```
```
340 No +CNMA acknowledgement expected
```

### 12.6. Summary of URC...................................................................................................................

## Table 17: Summary of URC

```
350 Unknown
```
```
500 Unknown
```
```
510 Message blocked
```
```
Index URC Display Meaning Condition
```
```
1 +CREG: <stat> Indicate registration status of the ME AT+CREG=1
```
##### 2

```
+CREG: <stat>[,<lac>,<ci>[,<
Act>]]
```
```
After cell neighborhood changing
shows whether the network has
currently indicated the registration of
the ME, with location area code
```
##### AT+CREG=2

```
3 +CGREG: <stat>
Indicate network registration status of
the ME AT+CGREG=1^
```
```
4
+CGREG: <stat>[,<lac>,<ci>[,
<Act>]]
```
```
Indicate network registration and
location information of the ME
```
##### AT+CGREG=2

```
5 +CTZV: <tz> Time zone reporting AT+CTZR=1
```
```
6 +CTZE: <tz>,<dst>,<time> Extended time zone reporting AT+CTZR=2
```
```
7 +CMTI: <mem>,<index> New message is received, and saved
to memory
See AT+CNMI
```
```
8 +CMT:^ [<alpha>],<length><C
R><LF><pdu>
```
```
New short message is received and
output directly to TE (PDU mode)
See AT+CNMI
```
##### 9

```
+CMT: <oa>,[<alpha>],<scts>
[,<tooa>,<fo>,<pid>,<dcs>,<sc
a>,<tosca>,<length>]<CR><L
F><data>
```
```
New short message is received and
output directly to TE (Text mode)
See AT+CNMI
```
##### 10

##### ^HCMT:

```
<oa>,<scts>,<lang>, <fmt>,<le
ngth>,<prt>,<prv>,<type>,<sta
t><CR><LF><data>
```
```
New short message is received and
output directly to TE
See AT+CNMI
```
##### 11

```
+CBM: <length><CR><LF><p
du>
```
```
New CBM is received and output
directly (PDU mode)
See AT+CNMI
```

##### 12

```
+CBM: <sn>,<mid>,<dcs>,<pa
ge>,<pages><CR><LF><dat
a>
```
```
New CBM is received and output
directly to TE (Text mode) See AT+CNMI^
```
13 +CDS:^ <length><CR><LF><p
du>

```
New CDS is received and output
directly (PDU mode)
See AT+CNMI
```
##### 14

```
+CDS: <fo>,<mr>,[<ra>],[<tor
a>],<scts>,<dt>,<st>
```
```
New CDS is received and output
directly to TE (Text mode) See AT+CNMI^
```
15 +CDSI: <mem>,<index>
New message status report is
received, and saved to memory See AT+CNMI^

##### 16

##### ^HCDS:

```
<oa>,<scts>,<lang>, <fmt>,<le
ngth>,<prt>,<prv>,<type>,<sta
t><CR><LF><data>
```
```
New CDS is received and output
directly to TE
See AT+CNMI
```
17 RDY ME initialization is successful N/A

18 +CFUN: 1 All function of the ME is available N/A

19 +CPIN: <state> SIM card pin state N/A

20 +QIND: SMS DONE SMS initialization finished N/A

21 +QIND: PB DONE Phonebook initialization finished N/A

22 POWERED DOWN Module power down AT+QPOWD

23
+CGEV: REJECT <PDP_typ
e>, <PDP_addr>

```
A network request for PDP activation,
and was automatically rejected.
```
##### AT+CGEREP=2,1

##### 24

```
+CGEV: NW REACT <PDP_t
ype>, <PDP_addr>, [<cid>]
```
```
The network request PDP
reactivation
```
##### AT+CGEREP=2,1

##### 25

```
+CGEV: NW DEACT <PDP_t
ype>, <PDP_addr>, [<cid>]
```
```
The network has forced a context
deactivation
```
##### AT+CGEREP=2,1

##### 26

```
+CGEV: ME DEACT <PDP_t
ype>, <PDP_addr>, [<cid>]
```
```
The ME has forced a context
deactivation.
```
##### AT+CGEREP=2,1

##### 27 +CGEV: NW DETACH

```
The network has forced a Packet
Domain detach.
```
##### AT+CGEREP=2,1

##### 28 +CGEV: ME DETACH

```
The mobile equipment has forced a
Packet Domain detach.
```
##### AT+CGEREP=2,1

29 +CGEV: NW CLASS <class> The network has forced a change of
MS class.

##### AT+CGEREP=2,1

30 +CGEV: ME CLASS <class> The mobile equipment has forced a
change of MS class.

##### AT+CGEREP=2,1

31 +USIM: 0 Use SIM card N/A

32 +USIM: 1 Use USIM card N/A


### 12.7. SMS Character Sets Conversions

In 3GPP TS 23.038 DCS (Data Coding Scheme) defined three kinds of alphabets in SMS, GSM 7 bit
default alphabet, 8 bit data and UCS2(16 bit). AT+CSMP can set the DCS in text mode (AT+CMGF=1). In
text mode, DCS (Data Coding Scheme) and AT+CSCS determine the way of SMS text input or output.

## Table 18: The Way of SMS Text Input or Output

When DCS = GSM 7 bit, the input or output needs conversion. The detailed conversion tables are shown
as below.

## Table 19: The Input Conversions Table (DCS = GSM 7 bit and AT+CSCS="GSM")

```
DCS AT+CSCS The Way of SMS Text Input or Output
```
```
GSM 7 bit GSM Input or output GSM character sets.
```
```
GSM 7 bit IRA
```
```
Input or output IRA character sets.
Input: UE will convert IRA characters to GSM characters.
Output: UE will convert GSM characters to IRA characters.
```
```
GSM 7 bit UCS2
```
```
Input or output a hex string similar to PDU mode. So only support
characters 0 – 9 and A–F.
Input: UE will convert the UCS2 hex string to GSM characters.
Output: UE will convert the GSM characters to UCS2 hex string.
```
```
UCS2 -
Ignore the value of AT+CSCS, input or output a hex string similar to
PDU mode. So only support characters 0 – 9 and A–F.
```
```
8 bit -
Ignore the value of AT+CSCS, input or output a hex string similar to
PDU mode. So only support characters 0 – 9 and A–F.
```
(^0 1 2 3 4 5 6 7)
0 00 10 20 30 40 50 60 70
1 01 11 21 31 41 51 61 71
2 02 12 22 32 42 52 62 72
3 03 13 23 33 43 53 63 73
4 04 14 24 34 44 54 64 74
5 05 15 25 35 45 55 65 75


## Table 20: The Output Conversions Table (DCS = GSM 7 bit and AT+CSCS="GSM")

##### 6 06 16 26 36 46 56 66 76

##### 7 07 17 27 37 47 57 67 77

##### 8 08 18 28 38 48 58 68 78

##### 9 09 19 29 39 49 59 69 79

```
A 0A Submit 2A 3A 4A 5A 6A 7A
```
```
B 0B Cancel 2B 3B 4B 5B 6B 7B
```
```
C 0C 1C 2C 3C 4C 5C 6C 7C
```
```
D 0D 1A 2D 3D 4D 5D 6D 7D
```
```
E 0E 1E 2E 3E 4E 5E 6E 7E
```
```
F 0F 1F 2F 3F 4F 5F 6F 7F
```
##### 0 1 2 3 4 5 6 7

##### 0 00 10 20 30 40 50 60 70

##### 1 01 11 21 31 41 51 61 71

##### 2 02 12 22 32 42 52 62 72

##### 3 03 13 23 33 43 53 63 73

##### 4 04 14 24 34 44 54 64 74

##### 5 05 15 25 35 45 55 65 75

##### 6 06 16 26 36 46 56 66 76

##### 7 07 17 27 37 47 57 67 77

##### 8 08 18 28 38 48 58 68 78

##### 9 09 19 29 39 49 59 69 79

A 0D0A (^) 2A 3A 4A 5A 6A 7A
B 0B 2B 3B 4B 5B 6B 7B
C 0C 1C 2C 3C 4C 5C 6C 7C


## Table 21: GSM Extended Characters

##### D 0D 1A 2D 3D 4D 5D 6D 7D

##### E 0E 1E 2E 3E 4E 5E 6E 7E

##### F 0F 1F 2F 3F 4F 5F 6F 7F

##### 0 1 2 3 4 5 6 7

##### 0 1 B40

##### 1

##### 2

##### 3

##### 4 1 B14

##### 5

##### 6

##### 7

##### 8 1 B28

##### 9 1 B29

##### A

##### B

##### C 1 B3C

##### D 1 B3D

##### E 1 B3E

##### F 1B2F


## Table 22: The Input Conversions Table (DCS = GSM 7 bit and AT+CSCS="IRA")

## Table 23: IRA Extended Characters

##### 0 1 2 3 4 5 6 7

##### 0 20 20 30 00 50 20 70

##### 1 20 20 21 31 41 51 61 71

##### 2 20 20 22 32 42 52 62 72

##### 3 20 20 23 33 43 53 63 73

##### 4 20 20 02 34 44 54 64 74

##### 5 20 20 25 35 45 55 65 75

##### 6 20 20 26 36 46 56 66 76

##### 7 20 20 27 37 47 57 67 77

```
8 backspace 20 28 38 48 58 68 78
```
```
9 20 20 29 39 49 59 69 79
```
```
A 0A Submit 2A 3A 4A 5A 6A 7A
```
```
B 20 Cancel 2B 3B 4B 1B3C 6B 1B28
```
```
C 20 20 2C 3C 4C 1B2F 6C 1B40
```
```
D 0D 20 2D 3D 4D 1B3E 6D 1B29
```
```
E 20 20 2E 3E 4E 1B14 6E 1B3D
```
```
F 20 20 2F 3F 4F 11 6F 20
```
##### A B C D E F

##### 0 20 20 20 20 7F^20

##### 1 40 20 20 5D^20 7D^

##### 2 20 20 20 20 20 08

##### 3 01 20 20 20 20 20

##### 4 24 20 5B^20 7B^20


## Table 24: The Output Conversions Table (DCS = GSM 7 bit and AT+CSCS="IRA")

##### 5 03 20 0E^20 0F^20

##### 6 20 20 1C^ 5C^ 1D^ 7C^

##### 7 5F^20 09 20 20 20

##### 8 20 20 20 0B^04 0C^

##### 9 20 20 1F^20 05 06

##### A 20 20 20 20 20 20

##### B 20 20 20 20 20 20

##### C 20 20 20 5E^07 7E^

##### D 20 20 20 20 20 20

##### E 20 20 20 20 20 20

##### F 20 60 20 1E^20 20

##### 0 1 2 3 4 5 6 7

##### 0 40 20 20 30 A1 50 BF 70

##### 1 A3 5F 21 31 41 51 61 71

##### 2 24 20 22 32 42 52 62 72

##### 3 A5 20 23 33 43 53 63 73

##### 4 E8 20 A4 34 44 54 64 74

##### 5 E9 20 25 35 45 55 65 75

##### 6 F9 20 26 36 46 56 66 76

##### 7 EC 20 27 37 47 57 67 77

##### 8 F2 20 28 38 48 58 68 78

##### 9 C7 20 29 39 49 59 69 79

##### A 0D0A 2A 3A 4A 5A 6A 7A

##### B D8 2B 3B 4B C4 6B E4


## Table 25: GSM Extended Characters

Because the low 8 bit of UCS2 character is the same as the IRA character:

The conversion table of DCS = GSM 7 bit and AT+CSCS="UCS2" is similar to AT+CSCS="IRA".
The conversion table of fmt = GSM 7 bit and AT+CSCS="GSM" is similar to AT+CSCS="GSM".

##### C F8 C6 2C 3C 4C D6 6C F6

##### D 0D E6 2D 3D 4D D1 6D F1

##### E C5 DF 2E 3E 4E DC 6E FC

##### F E5 C9 2F 3F 4F A7 6F E0

##### 0 1 2 3 4 5 6 7

##### 0 7C

##### 1

##### 2

##### 3

##### 4 5E

##### 5

##### 6

##### 7

##### 8 7B

##### 9 7D

##### A

##### B

##### C 5B

##### D 7E

##### E 5D

##### F 5C


The conversion table of fmt = GSM 7 bit and AT+CSCS="IRA" is similar to AT+CSCS="IRA".
The conversion table of fmt = GSM 7 bit and AT+CSCS="UCS2" is similar to AT+CSCS="IRA".

The difference is the way of SMS text input or output. Please refer to Table 17 : Summary of URC for more
details.

### 12.8. Release Cause Text List of AT+CEER

## Table 26: List of Location ID List

## Table 27: List of Cause

```
Location ID Meaning
```
```
0 CS internal cause
```
```
1 CS network cause
```
```
2 CS network reject
```
```
3 PS internal cause
```
```
4 PS network cause
```
```
5 PS LTE cause
```
```
6 PS LTE local cause
```
```
CS Internal Cause Meaning
```
- 1 No cause information available (default)

```
0 Phone is offline
```
```
21 No service available
```
```
25 Network release, no reason given
```
```
27 Received incoming call
```
```
29 Client ended call
```

34 UIM not present

35 Access attempt already in progress

36 Access failure, unknown source

38 Concur service not supported by network

39 No response received from network

45 GPS call ended for user call

46 SMS call ended for user call

47 Data call ended for emergency call

48 Rejected during redirect or handoff

100 Lower-layer ended call

101 Call origination request failed

102 Client rejected incoming call

103 Client rejected setup indication

104 Network ended call

105 No funds available

106 No service available

108 Full service not available

109 Maximum packet calls exceeded

301 Video connection lost

302 Video call setup failure

303 Video protocol closed after setup

304 Video protocol setup failure

305 Internal error

CS Network Cause Meaning

1 Unassigned/unallocated number


3 No route to destination

6 Channel unacceptable

8 Operator determined barring

16 Normal call clearing

17 User busy

18 No user responding

19 User alerting, no answer

21 Call rejected

22 Number changed

26 Non selected user clearing

27 Destination out of order

28 Invalid/incomplete number

29 Facility rejected

30 Response to status enquiry

31 Normal, unspecified

34 No circuit/channel available

38 Network out of order

41 Temporary failure

42 Switching equipment congestion

43 Access information discarded

44 Requested circuit/channel not available

47 Resources unavailable, unspecified

49 Quality of service unavailable

50 Requested facility not subscribed

55 Incoming calls barred within the CUG


57 Bearer capability not authorized

58 Bearer capability not available

63 Service/option not available

65 Bearer service not implemented

68 ACM >= ACM max

69 Requested facility not implemented

70 Only RDI bearer is available

79 Service/option not implemented

81 Invalid transaction identifier value

87 User not member of CUG

88 Incompatible destination

91 Invalid transit network selection

95 Semantically incorrect message

96 Invalid mandatory information

97 Message non-existent/not implemented

98 Message type not compatible with state

99 IE non-existent/not implemented

100 Conditional IE error

101 Message not compatible with state

102 Recovery on timer expiry

111 Protocol error, unspecified

127 Interworking, unspecified

CS Network Reject Meaning

2 IMSI unknown in HLR

3 Illegal MS


4 IMSI unknown in VLR

5 IMEI not accepted

6 Illegal ME

7 GPRS services not allowed

8 GPRS and non GPRS services not allowed

9 MS identity cannot be derived

10 Implicitly detached

11 PLMN not allowed

12 Location area not allowed

13 Roaming not allowed

14 GPRS services not allowed in PLMN

15 No suitable cells in location area

16 MSC temporary not reachable

17 Network failure

20 MAC failure

21 Synch failure

22 Congestion

23 GSM authentication unacceptable

32 Service option not supported

33 Requested service option not subscribed

34 Service option temporary out of order

38 Call cannot be identified

40 No PDP context activated

95 Semantically incorrect message

96 Invalid mandatory information


97 Message type non-existent

98 Message type not compatible with state

99 Information element non-existent

101 Message not compatible with state

161 RR release indication

162 RR random access failure

163 RRC release indication

164 RRC close session indication

165 RRC open session failure

166 Low level failure

167 Low level failure no redial allowed

168 Invalid SIM

169 No service

170 Timer T3230 expired

171 No cell available

172 Wrong state

173 Access class blocked

174 Abort message received

175 Other cause

176 Timer T303 expired

177 No resources

178 Release pending

179 Invalid user data

PS Internet Cause Meaning

0 Invalid connection identifier


1 Invalid NSAPI

2 Invalid primary NSAPI

7 PDP establish timeout

3 Invalid field

4 SNDCP failure

5 RAB setup failure

6 No GPRS context

8 PDP activate timeout

9 PDP modify timeout

10 PDP inactive max timeout

11 PDP lower layer error

12 PDP duplicate

13 Access technology change

14 PDP unknown reason

PS Network Cause Meaning

25 LLC or SNDCP failure

26 Insufficient resources

27 Missing or unknown APN

28 Unknown PDP address or PDP type

29 User authentication failed

30 Activation rejected by GGSN

31 Activation rejected, unspecified

32 Service option not supported

33 Requested service option not subscribed

34 Service option temporary out of order


35 NSAPI already used (not sent)

36 Regular deactivation

37 QoS not accepted

38 Network failure

39 Reactivation required

40 Feature not supported

41 Semantic error in the TFT operation

42 Syntactical error in the TFT operation

43 Unknown PDP context

44 PDP context without TFT already activated

45 Semantic errors in packet filter

46 Syntactical errors in packet filter

81 Invalid transaction identifier

95 Semantically incorrect message

96 Invalid mandatory information

97 Message non-existent/not implemented

98 Message type not compatible with state

99 IE non-existent/not implemented

100 Conditional IE error

101 Message not compatible with state

111 Protocol error, unspecified

PS LTE Cause Meaning

8 Operator determined barring

26 Insufficient Resources

27 Missing or unknown APN


28 Unknown PDP address or PDP type

29 User Aauthentication faile

30 Activation rejected by Servicing GW or PDN GW

31 Activation rejected, unspecified

32 Service option not supported

33 Requested service option not subscribed

34 Service option temporarily out of order

35 PTI already In use

36 Regular deactivation

37 QoS not accepted

38 Network failure

39 Reactivation required

40 Feature not supported

41 Semantic error in the TFT operation

42 Syntactical error in the TFT operation

43 Unknown Bearer context

44 Semantic errors in packet filter

45 Syntactical errors in packet filter

46 Bearer Context without TFT already Active

47 PTI mismatch

49 PDN disconnected, not allowed

50 PDN type IPV4 only Allowed

51 PDN type IPV6 only Allowed

52 Single ADR bearers only Allowed

53 ESM info not recieved


54 PDN connection does not exist

55 Multiple PDN connection for given APN not allowed

56 Collision with network init request

59 Unsupported QCI value

81 Invalid PTI value

95 Symantically invalid message

96 Invalid mandatory information

97 Message non-existent/not implemented

98 Message type not compatible with state

99 Info Elemant non existent

100 Conditional IE error

101 Message type not compatible with state

111 Protocol error, unspecified

112 APN restrict value incompatible with ACT context

PS LTE Local Cause Meaning

3 Illegal UE

6 Illegal ME

7 EPS services not allowed

9 UE id can't be driven by network

10 Implicitly Detached

11 PLMN not allowed

12 tracking area not allowed

13 Roaming not allowed in this tracking area

15 No Suitable cells in tracking area

18 CS Domain Not available


25 Not Authorized for this CSG

38 CS fallback call EST not allowed

39 CS domain temperarly not allowed

43 Unknown EPS bearer context

256 Released AT RRC

257 Signal Connection Released

258 EMM detached

259 EMM attach failed

260 EMM attach started

261 NAS service request failed

262 ESM activate dedicated bearer reactivater by network

263 Lower layer failure

264 Lower layer failure

265 Network activater dedicated bearer with ID of deffered bearer

266 BAD OTA message

267 DS rejected the call

268 Context transferred due to IRAT

269 DS explicit deactivation

270 ESM MSGR failure

271 Local Cause not Available

272 Rejected due to connected state

273 Nas Service request failed, no throttle

274 ACL failure

275 Nas Service request failed, DS disallow

276 EMM T3417 expired


277 EMM T3417 ext expired

278 Nas LRRC UL data CNF failure TXN

279 Nas LRRC UL data CNF failure HO

280 Nas LRRC UL data CNF failure Conn release

281 Nas LRRC UL data CNF failure RLF

282 Nas LRRC UL data CNF failure control Not CONN

283 NAS LRRC connection EST success

284 NAS LRRC connection EST failure

285 NAS LRRC connection EST failure, aborted

286 NAS LRRC connection EST failure, access barrer

287 NAS LRRC connection EST failure, CELL resel

288 NAS LRRC connection EST failure, config failure

289 NAS LRRC connection EST failure, timer expired

290 NAS LRRC connection EST failure, link failure

291 NAS LRRC connection EST failure, not camped

292 NAS LRRC connection EST failure, SI failure

293 NAS LRRC connection EST failure, CONN reject

294 NAS LRRC connection release normal

295 NAS LRRC connection release RLF

296 NAS LRRC connection release CRE failure

297 NAS LRRC connection release QOS during CRE

298 NAS LRRC connection release aborted

299 NAS LRRC connection release SIB read error

300 NAS LRRC connection release aborted IRAT Success

301 Nas Reject LRRC radio link failure


302 Nas service request failure, LTE network reject

303 Nas detach with reattach, LTE network detach

304 NAS detach without reacttach, LTE network detach


