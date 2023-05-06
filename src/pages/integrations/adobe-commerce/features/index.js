import * as React from "react";
import './index.css';

export default function Component() {
  return (
    <div className="page-content">

      <div class="main">
        <h1 class="spectrum-Heading spectrum-Heading--sizeXL spectrum-Heading--light hackP">Commerce coverage</h1>

        <p class="hackP">PWA Studio's storefront app — Venia — provides the following out-of-the-box coverage for Adobe Commerce and Open Source features. The icons show the coverage of each Commerce feature.</p>

        <div class="legend-keys">
          <div class="legend Full"> — Full support</div>
          <div class="legend Partial"> — Partial support</div>
          <div class="legend API"> — API support only</div>
          <div class="legend Commerce"> — Commerce-only</div>
        </div>

        <table class="comparison-table">
          <tbody>
            <tr class="category-name">
              <th>General</th>
              <th>Support</th>
            </tr>

            <tr class="category-feature">
              <td>Mobile View <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Desktop View <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Partial support">
                  <span class="support Partial"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>B2B <span class="support Commerce"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

          </tbody>

          <tbody>
            <tr class="category-name">
              <th>Extensions</th>
              <th>Support</th>
            </tr>

            <tr class="category-feature">
              <td>Backend extensions <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Frontend extensions <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Partial support">
                  <span class="support Partial"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>FE/BE extensions <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Partial support">
                  <span class="support Partial"></span>
                </span>
              </td>
            </tr>

          </tbody>

          <tbody>
            <tr class="category-name">
              <th>Product Types</th>
              <th>Support</th>
            </tr>

            <tr class="category-feature">
              <td>Simple <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Configurable <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Virtual <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Partial support">
                  <span class="support Partial"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Product with Custom options <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Grouped <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Bundled <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Downloadable <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Gift Cards <span class="support Commerce"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

          </tbody>

          <tbody>
            <tr class="category-name">
              <th>CMS</th>
              <th>Support</th>
            </tr>

            <tr class="category-feature">
              <td>AEM Fragments <span class="support Commerce"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Page Builder <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>CMS Pages <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>CMS Blocks <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Dynamic Blocks <span class="support Commerce"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>CMS Widgets <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

          </tbody>

          <tbody>
            <tr class="category-name">
              <th>Marketing</th>
              <th>Support</th>
            </tr>

            <tr class="category-feature">
              <td>Sensei Powered Product Recommendations <span class="support Commerce"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Promotions <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Partial support">
                  <span class="support Partial"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Special Pricing <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Partial support">
                  <span class="support Partial"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Email Templates <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Partial support">
                  <span class="support Partial"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Newsletter subscription <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Customer Segmentation <span class="support Commerce"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Staging<span class="support Commerce"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Preview<span class="support Commerce"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Related Products <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Contact Us <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Reward Points <span class="support Commerce"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

          </tbody>

          <tbody>
            <tr class="category-name">
              <th>Product Page</th>
              <th>Support</th>
            </tr>

            <tr class="category-feature">
              <td>Product Description <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Product Swatches <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Add To Wishlist <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Gallery <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Partial support">
                  <span class="support Partial"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Additional Attributes <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Reviews <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Add To Compare <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

          </tbody>

          <tbody>
            <tr class="category-name">
              <th>Checkout</th>
              <th>Support</th>
            </tr>

            <tr class="category-feature">
              <td>Checkout Page <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Saved Addresses <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Customer Login <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Subtotal / Tax / Shipping Cost <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Apply Discount Code <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Apply Gift Card <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Gift Options <span class="support Commerce"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Third Party Payment Methods <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Partial support">
                  <span class="support Partial"></span>
                </span>
              </td>
            </tr>

          </tbody>

          <tbody>
            <tr class="category-name">
              <th>Category Page</th>
              <th>Support</th>
            </tr>

            <tr class="category-feature">
              <td>Layered Navigation <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Sorting <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Product List <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Pagination <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Items Per Page <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

          </tbody>

          <tbody>
            <tr class="category-name">
              <th>Shopping Cart</th>
              <th>Support</th>
            </tr>

            <tr class="category-feature">
              <td>Shopping Cart Page <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Mini-cart <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Estimate Shipping and Tax <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Select Shipping Method <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Apply Coupon Code <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Apply Gift Card <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Edit Item Quantity <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Remove Item(s) <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Save for later <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Subtotal <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

          </tbody>

          <tbody>
            <tr class="category-name">
              <th>Customer</th>
              <th>Support</th>
            </tr>

            <tr class="category-feature">
              <td>Customer Login <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Forgot Password <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Create Account <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Custom Customer Attributes <span class="support Commerce"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

          </tbody>

          <tbody>
            <tr class="category-name">
              <th>Catalog</th>
              <th>Support</th>
            </tr>

            <tr class="category-feature">
              <td>Search <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>MSI <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Live Search <span class="support Commerce"></span></td>
              <td>
                <span class="tooltip left" data-text="Partial support">
                  <span class="support Partial"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Custom Product Attributes <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Backorders <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Advanced Inventory <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

          </tbody>

          <tbody>
            <tr class="category-name">
              <th>Multi-Store</th>
              <th>Support</th>
            </tr>

            <tr class="category-feature">
              <td>Language &amp; Currency Switcher <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Store Switcher <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Separate catalogs per store <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Shared cart and customers between stores <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Stores on separate domains <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

          </tbody>

          <tbody>
            <tr class="category-name">
              <th>Account</th>
              <th>Support</th>
            </tr>

            <tr class="category-feature">
              <td>Account Information <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Reset Password <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Address Book <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Orders list <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Order status <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Wishlist <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Multi-wish list <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Full support">
                  <span class="support Full"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Store Payment Methods <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="Partial support">
                  <span class="support Partial"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Re-order <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Returns <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Store Credit <span class="support Commerce"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Gift Registry <span class="support Commerce"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Product Reviews <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Invitations <span class="support Commerce"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

            <tr class="category-feature">
              <td>Dashboard <span class="support OpenSource"></span></td>
              <td>
                <span class="tooltip left" data-text="API support only">
                  <span class="support API"></span>
                </span>
              </td>
            </tr>

          </tbody>

        </table>
      </div>
    </div>
  );
}