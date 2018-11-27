/*

UNIT TESTING

In the very top of the folder, creating a new folder called 'test'
Right click the folder -> Mark directory as... -> Test source's root

right function -> Go to -> Test -> Create new test
Pick J-Unit 4, if new IntelliJ IDE, then you'll need to click fix to download J-Unit

Go to File -> Project Structure -> Modules -> Dependencies
Change JUnit4's scope from test to provided

The above will make the errors in the Test class go away

To see if changes were made, click the lightbulb icon for '@org.junit.Test', and see click the first option to make it '@Test'

CMD + ,
Editor -> Code style -> Java
removed the 'm' from field name prefix that previously used for private variables

Right click Test directory -> Run all tests
or CTRL + R in the Test file


Generating a new test method
CMD + N
*/

// ./tests/com/team/vending/CreditorTest.java
package com.teamtreehouse.vending;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class CreditorTest {

    private Creditor creditor;

    // CMD + N -> Setup Method
    @Before
    public void setUp() throws Exception {
        creditor = new Creditor();
    }

    @Test
    public void ThisIsAFunctionThatWontFail() {

        creditor.addFunds(25);
        creditor.addFunds(25);

        assertEquals(50, creditor.getAvailableFunds());
    }


    @Test
    public void refundingReturns() {

        creditor.addFunds(10);

        int refund = creditor.refund();

        assertEquals(10, refund);

    }

    @Test
    public void refundingReturns() {

        creditor.addFunds(10);

        int refund = creditor.refund();

        assertEquals(10, refund);
        assertEquals(0, creditor.getAvailableFunds());

    }
}
