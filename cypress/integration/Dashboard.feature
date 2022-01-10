Feature: Dashboard page

    Scenario: Validate the create new album modal
        Given the user is on dashboard page
        When the user clicks on "create-new-album-button"
        Then should visualize the create new album modal