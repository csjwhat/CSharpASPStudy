<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm2.aspx.cs" Inherits="ASPStudy01.WebForm2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <table style="width: 100%;">
            <tr>
                <td draggable="true">
                    <asp:Menu ID="Menu1" runat="server" OnMenuItemClick="Menu1_MenuItemClick" BackColor="#F7F6F3" DynamicHorizontalOffset="2" Font-Names="Verdana" Font-Size="0.8em" ForeColor="#7C6F57" StaticSubMenuIndent="10px" BorderStyle="Solid">
                        <DynamicHoverStyle BackColor="#7C6F57" ForeColor="White" />
                        <DynamicMenuItemStyle HorizontalPadding="5px" VerticalPadding="2px" />
                        <DynamicMenuStyle BackColor="#F7F6F3" />
                        <DynamicSelectedStyle BackColor="#5D7B9D" />
                        <Items>
                            <asp:MenuItem Text="新しい項目1" Value="MenuItem1">
                                <asp:MenuItem Text="新しい項目1_1" Value="MenuItem1_1"></asp:MenuItem>
                                <asp:MenuItem Text="新しい項目1_2" Value="MenuItem1_2"></asp:MenuItem>
                            </asp:MenuItem>
                            <asp:MenuItem Text="新しい項目2" Value="MenuItem2">
                                <asp:MenuItem Text="新しい項目2_1" Value="MenuItem2_1"></asp:MenuItem>
                                <asp:MenuItem Text="新しい項目2_2" Value="MenuItem2_2"></asp:MenuItem>
                            </asp:MenuItem>
                        </Items>
                        <StaticHoverStyle BackColor="#7C6F57" ForeColor="White" />
                        <StaticMenuItemStyle HorizontalPadding="5px" VerticalPadding="2px" />
                        <StaticSelectedStyle BackColor="#5D7B9D" />
                    </asp:Menu>
                </td>
                <td width="20pt">
                    <asp:Button ID="btnOpenStructure" runat="server" Text="Structure" OnClick="btnOpenStructure_Click" /></td>
                <td>
                    <asp:Panel ID="pnlStrcuture" runat="server">
                        <div>
                            <asp:Label ID="lblStructureCode" runat="server" Text="Structure Code"></asp:Label>
                            <asp:TextBox ID="txtStrcutureCode" runat="server"></asp:TextBox>
                        </div>
                        <div>
                            <asp:Label ID="lblCasNo" runat="server" Text="Cas No"></asp:Label>
                            <asp:TextBox ID="txtCasNo" runat="server" TextMode="MultiLine" Rows="5"></asp:TextBox>
                        </div>
                        <div>
                            <asp:Label ID="lblMdlNo" runat="server" Text="MDL#"></asp:Label>
                            <asp:TextBox ID="txtMdlNo" runat="server"></asp:TextBox>
                        </div>
                    </asp:Panel>
                    <asp:MultiView ID="MultiView1" runat="server"></asp:MultiView>
                    <asp:AdRotator ID="AdRotator1" runat="server" />
                    <asp:BulletedList ID="BulletedList1" runat="server"></asp:BulletedList>
                    <asp:DropDownList ID="DropDownList1" runat="server"></asp:DropDownList></td>
            </tr>
        </table>
    </form>
</body>
</html>
