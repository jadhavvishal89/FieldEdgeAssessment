using FieldEdgeAssessment.Model;

namespace FieldEdgeAssessment.Services
{
    public interface ICustomerService
    {
        Task<List<Customer>> GetCustomers();
        void  AddCustomer( Customer customer); 
        Task<Customer> GetCustomerbyId( string  id);
        void  DeleteCustomer( string  id);

        void UpdateCustomer( Customer customer );

    }
}
