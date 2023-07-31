using FieldEdgeAssessment.Model;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Text.Json;
using System.Text.Unicode;

namespace FieldEdgeAssessment.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly IConfiguration _configuration;
        public CustomerService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public  async void DeleteCustomer(string id)
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    httpClient.BaseAddress = new Uri(_configuration.GetValue<string>("ExternalApi:CustomerApiEndpoint"));
                    using (var response1 = await httpClient.DeleteAsync("Customer/" + id))
                    {
                        string apiResponse = await response1.Content.ReadAsStringAsync();
                      //  customer = JsonConvert.DeserializeObject<Customer>(apiResponse);
                    }
                }

            }
            catch (Exception ex) { }
        }

        public async Task<Customer> GetCustomerbyId(string id)
        {
            Customer customer = new Customer();
            try
            {
                using (var httpClient = new HttpClient())
                {
                    httpClient.BaseAddress = new Uri(_configuration.GetValue<string>("ExternalApi:CustomerApiEndpoint"));
                    using (var response1 = await httpClient.GetAsync("Customers/"+id))
                    {
                        string apiResponse = await response1.Content.ReadAsStringAsync();
                        customer = JsonConvert.DeserializeObject<Customer>(apiResponse);
                    }
                }

            }
            catch (Exception ex) { }
            return customer;
        }

        public async Task<List<Customer>> GetCustomers()
        {
            List<Customer> customers = new List<Customer>();
            try
            {
                using (var httpClient = new HttpClient())
                {
                    httpClient.BaseAddress = new Uri(_configuration.GetValue<string>("ExternalApi:CustomerApiEndpoint"));
                    using (var response1 = await httpClient.GetAsync("Customers"))
                    {
                        string apiResponse = await response1.Content.ReadAsStringAsync();
                        customers = JsonConvert.DeserializeObject<List<Customer>>(apiResponse);
                    }
                }
               
            }
            catch (Exception ex) { }
            return customers;
        }

        public  async void AddCustomer(Customer customer)
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri(_configuration.GetValue<string>("ExternalApi:CustomerApiEndpoint"));
                using (var response1 = await httpClient.PostAsJsonAsync("Customers", customer))
                {
                    string apiResponse = await response1.Content.ReadAsStringAsync();
                    //customers = JsonConvert.DeserializeObject<List<Customer>>(apiResponse);
                }
            }

        }

        public  async void UpdateCustomer(Customer customer)
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri(_configuration.GetValue<string>("ExternalApi:CustomerApiEndpoint"));
                using (var response1 = await httpClient.PutAsJsonAsync("Customers", customer))
                {
                    string apiResponse = await response1.Content.ReadAsStringAsync();
                    //customers = JsonConvert.DeserializeObject<List<Customer>>(apiResponse);
                }
            }
        }
    }
}
