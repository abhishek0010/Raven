import frappe


@frappe.whitelist()
def get_list():
    '''
    Fetches list of all users who have the role: Raven User
    '''
    users = frappe.get_all("User",
                           filters=[["name", "not in", ["Guest"]], [
                               "Has Role", "role", "=", 'Raven User']],
                           fields=["full_name", "user_image",
                                   "name", "first_name"],
                           order_by="full_name")
    return users