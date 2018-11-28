/*

UNIT TESTING

To go to a type declaration of an argument param:
SHIFT + CMD + B
For the declaration:
CMD + B

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

To create a new test for a class:
Click on the class -> cmd + shift + t -> click the checkbox for a @before method and a separate test method
*/

// ./tests/com/team/vending/CreditorTest.java
package com.team.vending;

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
    public void refundingReturns2() {

        creditor.addFunds(10);

        int refund = creditor.refund();

        assertEquals(10, refund);
        assertEquals(0, creditor.getAvailableFunds());

    }
}

// ./src/com/team/vending/Creditor.java
package com.team.vending;

public class Creditor {
    private int funds;

    public Creditor() {
        funds = 0;
    }

    public void addFunds(int money) {
        funds += money;
    }

    public void deduct(int money) throws NotEnoughFundsException {
        if (money > funds) {
            throw new NotEnoughFundsException();
        }
        funds -= money;
    }

    public int refund() {
        int refund = funds;
        funds = 0;
        return refund;
    }

    public int getAvailableFunds() {
        return funds;
    }

}

/*
  ---------------------------------------------------------------
*/

// ./tests/com/team/vending/AlphaNumericChooserTest.java
package com.team.vending;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class AlphaNumericChooserTest {

    private AlphaNumericChooser chooser;

    @Before
    public void setUp() throws Exception {
        chooser = new AlphaNumericChooser(26, 10);
    }

    @Test
    public void validInput() throws Exception {
        AlphaNumericChooser.Location loc = chooser.locationFromInput("B4");

        assertEquals("Proper Row",1, loc.getRow());
        assertEquals("Proper Column", 3, loc.getColumn());
    }

    // this test expects the invalid location exception class
    @Test(expected = InvalidLocationException.class)
    public void wrongInputNotAllowed() throws Exception {
        chooser.locationFromInput("Wrong.");
    }

    @Test(expected = InvalidLocationException.class)
    public void overMaxInput() throws Exception {
        chooser.locationFromInput("B100");
    }
}


// ./src/com/team/vending/AlphaNumericChooser.java
package com.team.vending;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class AlphaNumericChooser extends AbstractChooser {
    private int ALPHA_FIRST = (int) 'A';
    private int ALPHA_LAST = (int) 'Z';

    public AlphaNumericChooser(int maxRows, int maxColumns) {
        super(maxRows, maxColumns);
        int maxAllowedAlpha = (ALPHA_LAST - ALPHA_FIRST) + 1;
        if (maxRows > maxAllowedAlpha) {
            throw new IllegalArgumentException("Maximum rows supported is " + maxAllowedAlpha);
        }
    }

    @Override
    public Location locationFromInput(String input) throws InvalidLocationException {
        Pattern pattern = Pattern.compile("^(?<row>[a-zA-Z]{1})(?<column>[0-9]+)$");
        Matcher matcher = pattern.matcher(input);
        if (!matcher.matches()) {
            throw new InvalidLocationException("Invalid buttons");
        }
        int row = inputAsRow(matcher.group("row"));
        int column = inputAsColumn(matcher.group("column"));
        return new Location(row, column);

    }

    private int inputAsRow(String rowInput) {
        rowInput = rowInput.toUpperCase();
        return (int) rowInput.charAt(0) - ALPHA_FIRST;

    }

    private int inputAsColumn(String columnInput) {
        int columnAsInt = Integer.parseInt(columnInput);
        return columnAsInt - 1;
    }
}


// ./src/com/team/vending/AbstractChooser.java
package com.team.vending;

// Abstract class cannot be instantiated, must extend it and override with abstract keyword
public abstract class AbstractChooser {
    private final int maxRows;
    private final int maxColumns;

    public class Location {
        private final int row;
        private final int column;

        protected Location(int row, int column) throws InvalidLocationException {
            if (row > maxRows || column > maxColumns) {
                throw new InvalidLocationException("Invalid Location");
            }
            this.row = row;
            this.column = column;
        }

        public int getRow() {
            return row;
        }

        public int getColumn() {
            return column;
        }
    }

    public AbstractChooser(int maxRows, int maxColumns) {
        this.maxRows = maxRows;
        this.maxColumns = maxColumns;
    }

    public abstract Location locationFromInput(String input) throws InvalidLocationException;
}


// ./src/com/team/vending/InvalidLocationException.java
package com.team.vending;

public class InvalidLocationException extends Exception {
    public InvalidLocationException(String s) {
        super(s);
    }
}


/*
  ---------------------------------------------------------------
*/

// ./tests/com/team/vending/BinTest.java
package com.team.vending;

import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

import static org.junit.Assert.*;

public class BinTest {

    private Bin bin;

    @Rule
    public ExpectedException thrown = ExpectedException.none();

    @Before
    public void setUp() throws Exception {
        bin = new Bin(10);
    }

    @Test(expected = IllegalArgumentException.class)
    public void differentItemRestockNotAllowed() throws Exception {
        bin.restock("Twix", 1, 100, 50);
        bin.restock("Snickers", 1, 100, 50);
        bin.restock("Reeses", 1, 100, 50);
    }

    @Test
    public void zeroIfEmpty() throws Exception {
        assertEquals(0, bin.getItemPrice());
    }

    @Test
    public void nullIfEmpty() throws Exception {
        assertNull(bin.getItemName());
    }

    @Test
    public void noOverstocking() throws Exception {
        thrown.expect(IllegalArgumentException.class);
        thrown.expectMessage("There are only 10 spots left");
        bin.restock("Twix", 1000, 100, 50);
    }
}


// ./src/com/team/vending/bin.java
package com.team.vending;

import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

import static org.junit.Assert.*;

public class BinTest {

    private Bin bin;

    @Rule
    public ExpectedException thrown = ExpectedException.none();

    @Before
    public void setUp() throws Exception {
        bin = new Bin(10);
    }

    @Test(expected = IllegalArgumentException.class)
    public void differentItemRestockNotAllowed() throws Exception {
        bin.restock("Twix", 1, 100, 50);
        bin.restock("Snickers", 1, 100, 50);
        bin.restock("Reeses", 1, 100, 50);
    }

    @Test
    public void zeroIfEmpty() throws Exception {
        assertEquals(0, bin.getItemPrice());
    }

    @Test
    public void nullIfEmpty() throws Exception {
        assertNull(bin.getItemName());
    }

    @Test
    public void noOverstocking() throws Exception {
        thrown.expect(IllegalArgumentException.class);
        thrown.expectMessage("There are only 10 spots left");
        bin.restock("Twix", 1000, 100, 50);
    }
}
